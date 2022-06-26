import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  visibleSidebar1: boolean = true;
  constructor(private alertify: AlertifyService) { 
    this.alertify.message("deneme", MessageType.Notify, Position.TopRight);
  }

  ngOnInit(): void {

  }

}
