import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TagsTableDataSource, TagsTableItem } from './tags-table-datasource';
import { TagsService } from '../../../services/tags.service';


@Component({
  selector: 'app-tags-table',
  templateUrl: './tags-table.component.html',
  styleUrls: ['./tags-table.component.scss']
})
export class TagsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TagsTableItem>;
  dataSource;
  blocks: [
    {"id": ''},
    {"name": ''}
  ];


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private tagsService: TagsService) {
    this.dataSource = new TagsTableDataSource();
  }
  ngOnInit(): void {
    this.tagsService.getAllTags().subscribe((res: any) => {
        this.blocks = res;
        this.dataSource = new MatTableDataSource<any>(this.blocks); 

        let dataLength = res.length;
        localStorage.setItem('tagLength', dataLength); 
     });
 
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
