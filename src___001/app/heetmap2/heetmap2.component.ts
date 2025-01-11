import { Component } from '@angular/core';

@Component({
  selector: 'app-heetmap2',
  templateUrl: './heetmap2.component.html',
  styleUrls: ['./heetmap2.component.scss']
})
export class Heetmap2Component {
  visibleContainer: string = 'tableFactors'; // Default container
  insights = { loading: false, typeHeatlist: '' }; 

}
