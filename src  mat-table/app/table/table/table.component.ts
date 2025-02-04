import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['code', 'name', 'email', 'phone', 'status', 'action'];
  dataSource = new MatTableDataSource<Customer>([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', status: 'Inactive' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', phone: '1122334455', status: 'Active' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', status: 'Inactive' },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  Filterchange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addcustomer() {
    alert('Add customer functionality to be implemented');
  }

  editcustomer(id: number) {
    alert(`Edit customer with ID: ${id}`);
  }

  detailcustomer(id: number) {
    alert(`View details of customer with ID: ${id}`);
  }
}
