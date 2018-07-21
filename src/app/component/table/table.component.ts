import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TableDataSource } from "./table-data-source";
import { MatPaginator, MatSort } from "@angular/material";

import * as fromRoot from '../../app.reducer';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource;
    displayedColumns = ['id', 'invoice', 'name', 'description', 'price', 'email', 'created', 'updated']
  constructor(private store: Store<fromRoot.State>) {

  }


  ngOnInit() {
    this.dataSource = new TableDataSource(this.sort, this.paginator, this.store);
  }

}
