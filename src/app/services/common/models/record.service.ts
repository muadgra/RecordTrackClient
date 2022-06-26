import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateRecord } from 'src/app/contracts/create_record';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private httpClientService: HttpClientService) {

  }

  create(record: CreateRecord, successCallBack?: any, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "records"
    }, record)
      .subscribe(result => {
        successCallBack();
      }, (errorResp : HttpErrorResponse) => {
        const _error: Array<{key: string, value: Array<string>}> = errorResp.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        if(errorCallBack) errorCallBack(message);
      });
    
  }
}
