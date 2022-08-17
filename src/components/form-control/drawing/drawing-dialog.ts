/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';

@Component({
    selector: 'asw-drawing-dialog',
    templateUrl: './drawing-dialog.html'
})
export class AswDrawingDialog implements OnInit {

    constants: any = Constants;
    aswDrawingForm!: FormGroup;
    objectUtils = ObjectUtils;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswDrawingDialog>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswDrawingForm = this.formBuilder.group({
            label: [],
            column: [],
            class: [],
            imageUrl: [],
            width: [],
            height: []
        });
    }

    editProperty(control: any): void {
        this.aswDrawingForm.setValue({
            label: control.label,
            class: control.class,
            column: control.column,
            imageUrl: control.imageUrl,
            width: control.width,
            height: control.height
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswDrawingForm.invalid) {
            return;
        }
        this.aswDrawingForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswDrawingForm.value);
    }
}
