import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  filterSkills(event: Event): void {
    const searchInput = document.getElementById('skill-search-input');
    const allFilterableElements = document.querySelectorAll('.filterable-skill, .skill-container');

    allFilterableElements.forEach(element => {
        /**
       * Filtra las habilidades visibles según el término de búsqueda.
       */
      function filterSkills() {
          const searchTerm = (searchInput as HTMLInputElement).value.toLowerCase();
          allFilterableElements.forEach(element => {
              if (element.classList.contains('skill-container')) {
                  const items = element.querySelectorAll('.filterable-item');
                  let hasVisibleItem = false;
                  items.forEach(item => {
                      if (item.textContent.toLowerCase().includes(searchTerm)) {
                          item.classList.remove('hidden-skill');
                          hasVisibleItem = true;
                      } else {
                          item.classList.add('hidden-skill');
                      }
                  });
                  element.classList.toggle('hidden-skill', !hasVisibleItem);
              } else {
                  element.classList.toggle('hidden-skill', !element.textContent.toLowerCase().includes(searchTerm));
              }
          });
      }

    });
  }
}