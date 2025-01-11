import { Component } from '@angular/core';
import {  AfterViewInit } from '@angular/core';
// import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // ngAfterViewInit(): void {
  //   this.renderEmployeeEngagementChart();
  //   this.renderENPSChart();
  // }

  // renderEmployeeEngagementChart(): void {
  //   new Chart('engagementChart', {
  //     type: 'pie',
  //     data: {
  //       labels: ['Engaged (76%)', 'Partially Engaged (24%)', 'Actively Disengaged (0%)'],
  //       datasets: [
  //         {
  //           data: [76, 24, 0],
  //           backgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
  //         },
  //       ],
  //     },
  //   });
  // }

  // renderENPSChart(): void {
  //   new Chart('eNPSChart', {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Previous', 'Current'],
  //       datasets: [
  //         {
  //           data: [43, 48],
  //           backgroundColor: ['#FF9800', '#4CAF50'],
  //         },
  //       ],
  //     },
  //     options: {
  //       circumference: 180,
  //       rotation: -90,
  //       cutout: '80%',
  //     },
  //   });
  // }
}
