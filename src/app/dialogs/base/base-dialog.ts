import { MatDialogRef } from "@angular/material/dialog";
import { DeleteDialogComponent } from "src/app/dialogs/delete-dialog/delete-dialog.component";

export class BaseDialog<DeleteDialogComponent> {
    constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>

    ) {

    }
    close() {
        this.dialogRef.close();
    }

}

