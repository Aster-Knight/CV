import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SearchResult } from '../../services/search.service';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() results: SearchResult[] = [];
  @Input() isLoading = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onResultClick(result: SearchResult, event: MouseEvent): void {
    event.preventDefault();
    if (result.url.startsWith('/#')) {
      if (isPlatformBrowser(this.platformId)) {
        const fragment = result.url.split('#')[1];
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      window.open(result.url, '_blank');
    }
  }
}
