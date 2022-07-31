import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateRecord } from 'src/app/contracts/create_record';
import { HttpErrorResponse } from '@angular/common/http';
import ListRecord from 'src/app/contracts/list_record';
import { firstValueFrom, Observable } from 'rxjs';
import { List_Record_Image } from 'src/app/contracts/list_record.image';
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
      }, (errorResp: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResp.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        if (errorCallBack) errorCallBack(message);
      });
  }
  async getAll(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; records: ListRecord[] } | undefined> {
    const promiseData: Promise<{ totalCount: number; records: ListRecord[] } | undefined> = this.httpClientService.get<{ totalCount: number; records: ListRecord[] }>({
      controller: "records",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => {
      if(successCallBack) successCallBack()
    })
      .catch((errorResponse: HttpErrorResponse) => 
      {
        if(errorCallBack) errorCallBack(errorResponse.message)
      })

    return await promiseData;
  }

  async delete(id: string){
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller:"records"
    }, id);

    var a = await firstValueFrom(deleteObservable);
  }

  async readImages(id: string): Promise<List_Record_Image[]>{
    const getObservable: Observable<List_Record_Image[]> = this.httpClientService.get<List_Record_Image[]>({
      action: "getRecordImages",
      controller: "records"
    }, id);
    return await firstValueFrom(getObservable);
  }

  async deleteImage(id: string, imageId: string, successCallBack?: () => void) {
    const deleteObservable = this.httpClientService.delete({
      action: "deleteproductimage",
      controller: "products",
      queryString: `imageId=${imageId}`
    }, id)
    await firstValueFrom(deleteObservable);
  }
}
