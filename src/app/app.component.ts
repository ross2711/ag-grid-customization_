import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  columnDefs = [
    {
      headerName: 'make',
      field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    { headerName: 'model', field: 'model', sortable: true, filter: true },
    { headerName: 'price', field: 'price', sortable: true, filter: true }
  ];

  rowData: any;
  // Hardcoded data
  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
}
