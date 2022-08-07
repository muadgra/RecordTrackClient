import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsModule } from './baskets/baskets.module';
import { HomeModule } from './home/home.module';
import { RecordsModule } from './records/records.module';
import { RegisterModule } from './register/register.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecordsModule,
    BasketsModule,
    HomeModule,
    RegisterModule
  ]
})
export class ComponentsModule { }
