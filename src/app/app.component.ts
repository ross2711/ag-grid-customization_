import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
  title = 'app';

  columnDefs = [
    { headerName: 'Make', field: 'make', rowGroup: true },
    { headerName: 'Price', field: 'price' }
  ];

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  rowData: any;
  // Hardcoded data
  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log('selectedNodes', selectedNodes);
    const selectedData = selectedNodes.map(node => node.data);
    console.log('selectedData', selectedData);
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + ' ' + node.model)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
