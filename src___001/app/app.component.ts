import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'getapi';

  filters = {};

  updateFilters(newFilters: any) {
    this.filters = newFilters;
  }
}
