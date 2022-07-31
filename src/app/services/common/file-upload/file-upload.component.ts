import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent } from 'src/app/dialogs/file-upload-dialog/file-upload-dialog.component';
import { DialogService } from '../dialog.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(private httpClientService: HttpClientService,
    private dialog: MatDialog,
    private alertify: AlertifyService,
    private dialogService: DialogService
  ) {

  }

  public files!: NgxFileDropEntry[];

  @Input() options!: Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      })
    }
    this.dialogService.openDialog({
      componentType: FileUploadDialogComponent,
      data: FileUploadDialogState.Yes,
      afterClosed: () => {
        console.log(this.options);
        this.httpClientService.post({
          controller: this.options.controller,
          action: this.options.action,
          queryString: this.options.queryString,
          headers: new HttpHeaders({
            "responseType": "blob"
          })
        }, fileData).subscribe(data => {
          this.alertify.message("File has been uploaded successfully",
            MessageType.Success,
            Position.TopRight,
            1
          )
        }, (errorResponse: HttpErrorResponse) => {
          this.alertify.message("Files haven't been uploaded successfully",
            MessageType.Error,
            Position.TopRight,
            1
          )
        });
      }
    });
  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      width: '250px',
      data: FileUploadDialogState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == FileUploadDialogState.Yes) {
        afterClosed();
      }
    });
  }
}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept: string = "Yes";
  isAdminPage?: boolean = false;
  constructor() {

  }
}

export enum FileUploadDialogState {
  Yes,
  No
}