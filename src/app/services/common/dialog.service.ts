import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openDialog(dialogParameters: DialogParameters): void {
    const dialogRef = this.dialog.open(dialogParameters.componentType, {
      width: dialogParameters.options?.width,
      data: dialogParameters.data,
      position: dialogParameters.options?.position,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == dialogParameters.data){
        dialogParameters.afterClosed();
      }
    });
  }
}

export class DialogParameters{
  componentType!: ComponentType<any>;
  data: any;
  afterClosed!: () => void;
  options?: DialogOptions = new DialogOptions();
}

export class DialogOptions{
  width: string = "250px";
  height: string = "250px";
  position?: DialogPosition;
}