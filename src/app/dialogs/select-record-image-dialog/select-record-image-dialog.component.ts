import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { firstValueFrom } from 'rxjs';
import { SpinnerType } from 'src/app/base/base.component';
import { List_Record_Image } from 'src/app/contracts/list_record.image';
import { DialogService } from 'src/app/services/common/dialog.service';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { RecordService } from 'src/app/services/common/models/record.service';
import { BaseDialog } from '../base/base-dialog';
import { DeleteDialogComponent, DeleteState } from '../delete-dialog/delete-dialog.component';
declare var $: any
@Component({
  selector: 'app-select-record-image-dialog',
  templateUrl: './select-record-image-dialog.component.html',
  styleUrls: ['./select-record-image-dialog.component.scss']
})
export class SelectRecordImageDialogComponent extends BaseDialog<SelectRecordImageDialogComponent> implements OnInit{
  
  constructor(dialogRef: MatDialogRef<SelectRecordImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectState | string,
    private recordService: RecordService,
    private dialogService: DialogService,
    private spinner: NgxSpinnerService,
  ) {
    super(dialogRef);
  }
  
  @Output() options: Partial<FileUploadOptions> = {
    accept: ".png, .jpg, .jpeg, .gif",
    action: "upload",
    controller: "records",
    explanation: "Ürün resimini seçin veya buraya sürükleyin...",
    isAdminPage: true,
    queryString: `id=${this.data}`
  };
  images!: List_Record_Image[];
  async ngOnInit(): Promise<void> {
    this.images = await this.recordService.readImages(this.data as string);
  }
  async deleteImage(imageId: string, event: any) {

    this.dialogService.openDialog({
      componentType: DeleteDialogComponent,
      data: DeleteState.Yes,
      afterClosed: async () => {
        this.spinner.show(SpinnerType.BallAtom)
        await this.recordService.deleteImage(this.data as string, imageId, () => {
          this.spinner.hide(SpinnerType.BallAtom);
          var card = $(event.srcElement).parent().parent();
          debugger;
          card.fadeOut(500);
        });
      }
    })
  }
  
}

enum SelectState {
  Close
}