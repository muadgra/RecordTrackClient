import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RecordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: RecordsComponent}
    ])
  ]
})
export class RecordsModule { }
