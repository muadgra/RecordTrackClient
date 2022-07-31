import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { SelectRecordImageDialogComponent } from './select-record-image-dialog/select-record-image-dialog.component';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';
import {MatCardModule} from '@angular/material/card';
import { FileUploadComponent } from '../services/common/file-upload/file-upload.component';



@NgModule({
  declarations: [
    DeleteDialogComponent,
    SelectRecordImageDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FileUploadModule
    
  ]
})
export class DialogModule { }
