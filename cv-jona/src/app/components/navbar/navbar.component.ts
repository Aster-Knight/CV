import { Component, OnDestroy } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { SearchService, SearchResult } from '../../services/search.service';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchResultsComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  results: SearchResult[] = [];
  isLoading = false;
  showResults = false;

  private searchTerm = new Subject<string>();
  private searchSubscription: Subscription;

  constructor(private searchService: SearchService) {
    this.searchSubscription = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
        this.isLoading = true;
        this.showResults = true;
        this.results = [];
      }),
      switchMap((term: string) => this.searchService.search(term)),
      tap(() => this.isLoading = false)
    ).subscribe(results => {
      this.results = results;
    });
  }

  onSearch(event: Event): void {
    const term = (event.target as HTMLInputElement).value;
    this.searchTerm.next(term);
    if (!term.trim()) {
      this.showResults = false;
    }
  }

  hideResults(): void {
    // Hide results with a small delay to allow click events to register
    setTimeout(() => {
      this.showResults = false;
    }, 200);
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
