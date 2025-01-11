import { Component } from '@angular/core';

@Component({
  selector: 'app-heet-map',
  templateUrl: './heet-map.component.html',
  styleUrls: ['./heet-map.component.scss']
})
export class HeetMapComponent {
  visibleContainer: string = 'tableFactors'; // Initial container to display
  insights = { loading: false, typeHeatlist: '' }; // Mock data for insights

  // Method to switch the visible container
  showContainer(container: string) {
    this.visibleContainer = container;
  }
}
