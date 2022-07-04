import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateRecord } from 'src/app/contracts/create_record';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor(private HttpClientService: HttpClientService) {

   }

  ngOnInit(): void {
    
  }
  @ViewChild(ListComponent) listComponent!: ListComponent;
  createdRecord(createdRecord: CreateRecord) {
    this.listComponent.getRecords();
    console.log(this.listComponent);
    console.log("deneme");
  }


}
