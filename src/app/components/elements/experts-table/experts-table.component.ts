import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ExpertsService } from '../../../services/experts.service';
import { ExpertsTableDataSource, ExpertsTableItem } from './experts-table-datasource';


@Component({
  selector: 'app-experts-table',
  templateUrl: './experts-table.component.html',
  styleUrls: ['./experts-table.component.scss']
})
export class ExpertsTableComponent implements AfterViewInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ExpertsTableItem>;
  dataSource;
  blocks: any[];


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'estado', 'etiquetas','valoracion'];

  constructor(private expertsService:ExpertsService) {
  }
   ngOnInit(): void {
   this.expertsService.getAllExperts().subscribe((res: any) => {
      this.blocks = res;
       this.dataSource = new MatTableDataSource<any>(this.blocks);

       console.log(res)
    });

 }
 ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  this.table.dataSource = this.dataSource;
}
}
