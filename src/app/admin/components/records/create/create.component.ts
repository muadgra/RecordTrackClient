import { Component, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateRecord } from 'src/app/contracts/create_record';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { RecordService } from 'src/app/services/common/models/record.service';
import { EventEmitter } from '@angular/core';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private recordService: RecordService, private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void {
  }

  @Output() createdRecord: EventEmitter<CreateRecord> = new EventEmitter();
 
  
  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallAtom);
    const createRecord: CreateRecord = new CreateRecord();
    createRecord.name = name.value;
    createRecord.stock = parseInt(stock.value);
    createRecord.price = parseFloat(price.value);
    this.recordService.create(createRecord, () => {
      this.hideSpinner(SpinnerType.BallAtom)
      this.alertify.message("A record has been created",
        MessageType.Success,
        Position.TopRight,
        3
      );
    }, errorMessage => {
      this.alertify.message(errorMessage,
        MessageType.Error,
        Position.TopRight,
        3
      );
    });
  }
}
