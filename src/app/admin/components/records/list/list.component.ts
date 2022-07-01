import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import ListRecord from 'src/app/contracts/list_record';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { RecordService } from 'src/app/services/common/models/record.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {


  constructor(spinner: NgxSpinnerService, private recordService: RecordService, private alertifyService: AlertifyService) {
    super(spinner);
  }
  displayedColumns: string[] = [
    'name',
    'price',
    'stock',
    'createdDate',
    'updatedDate'
  ];
  dataSource: MatTableDataSource<ListRecord> = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  async ngOnInit() {
    await this.getRecords();
  }

  async getRecords() {
    this.showSpinner(SpinnerType.BallAtom);
    const allRecords: { totalCount: number; records: ListRecord[] } | undefined = await this.recordService.getAll(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5,
      () => this.hideSpinner(SpinnerType.BallAtom), () => this.alertifyService.message("Error while loading list", MessageType.Error, Position.TopRight, 3))
   console.log(allRecords?.records);
    if (allRecords) {
      this.dataSource = new MatTableDataSource<ListRecord>(allRecords.records);
      
      this.paginator.length = allRecords.totalCount;
    }
  }
  async pageChanged() {
    await this.getRecords();
  }

}
