/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';
import { EditSignatureComponent } from '../../edit-controls/edit-signature/edit-signature.component';

@Component({
  selector: 'asw-signature',
  templateUrl: './signature.component.html'
})
export class SignatureComponent {

  constants: any = Constants;

  @Input() control: any;

  @Input() controlIndex: number;
  @Input() isPreviewTemplate = true;

  @Output() signatureUpdateEvent = new EventEmitter<{ control: any, index: number }>();
  @Output() signatureDeleteEvent = new EventEmitter<number>();
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  constructor(public dialog: MatDialog) { }

  deleteSignatureDialog(control: any, controlIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { name: control.label, message: this.constants.messages.waringMessage }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.signatureDeleteEvent.emit(controlIndex);
      }
    });
  }

  editSignatureDialog(control: any, controlIndex: number): void {
    const dialogRef = this.dialog.open(EditSignatureComponent, {
      disableClose: true,
      width: '744px',
      data: control
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.signatureUpdateEvent.emit({ control: result, index: controlIndex });
      }
    });
  }
}
