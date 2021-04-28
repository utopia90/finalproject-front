import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ExpertsService } from '../../../services/experts.service';
import {
  ExpertsTableDataSource,
  ExpertsTableItem,
} from './experts-table-datasource';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experts-table',
  templateUrl: './experts-table.component.html',
  styleUrls: ['./experts-table.component.scss'],
})
export class ExpertsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ExpertsTableItem>;
  dataSource;
  blocks: any[];
  stateOption;
  nameExpertOption;
  nameTagOption;
  ratingOption;
  constant: any[];
  state = [{ value: 'validado' }, { value: 'por validar' }];
  rating = [
    { value: '15' },
    { value: '25' },
    { value: '55' },
    { value: '75' },
    { value: '100' },
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'estado', 'etiquetas', 'valoracion'];

  constructor(private expertsService: ExpertsService, private router: Router) {}
  ngOnInit(): void {
    this.expertsService.getAllExperts().subscribe((res: any) => {
      this.blocks = res;
      this.constant = res;
      this.dataSource = new MatTableDataSource<any>(this.blocks);

      console.log(res);
      let dataLength = res.length;
      localStorage.setItem('expertsLength', dataLength);
    });
  }

  filterByState() {
    this.blocks = this.blocks.filter((x) => x.state == this.stateOption);
  }

  filterByNameExpert() {
    this.blocks = this.blocks.filter((x) =>
      x.name.toLowerCase().includes(this.nameExpertOption.toLowerCase())
    );
  }

  filterByNameTag() {
    this.blocks = this.blocks.filter((x) =>
      x.tags.some((tag) => tag.name.includes(this.nameTagOption))
    );
  }

  filterByRating() {
    this.blocks = this.blocks.filter((x) => x.rating == this.ratingOption);
  }
  refresh() {
    this.blocks = this.constant;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.blocks;
  }
}
