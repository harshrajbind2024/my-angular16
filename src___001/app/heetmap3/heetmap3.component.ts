import { Component } from '@angular/core';

@Component({
  selector: 'app-heetmap3',
  templateUrl: './heetmap3.component.html',
  styleUrls: ['./heetmap3.component.scss']
})
export class Heetmap3Component {
  // Available options for the dropdown
  containerOptions = [
    { value: 'tableFactors', label: 'Table Factors' },
    { value: 'driverFactors', label: 'Driver Factors' },
    { value: 'driverQuestions', label: 'Driver Questions' }
  ];

  // Default selected container
  visibleContainer: string = 'tableFactors';
}
