import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule, 
    SidebarModule,
    ButtonModule,
    UiModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
  ],
  providers: [{provide: "baseUrl", useValue: "https://localhost:7276/api", multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }