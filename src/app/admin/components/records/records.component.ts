import { Component, OnInit } from '@angular/core';
import { CreateRecord } from 'src/app/contracts/create_record';
import { HttpClientService } from 'src/app/services/common/http-client.service';

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

}
