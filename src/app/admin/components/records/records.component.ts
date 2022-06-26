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
    this.HttpClientService.get<CreateRecord[]>({
      controller: "records"
    }).subscribe(data => console.log(data));

    this.HttpClientService.post({
      controller: "records",
    }, {
      name: "deneme2",
      stock: 100,
      price: 3
    }).subscribe(data => console.log(data));
  }

}
