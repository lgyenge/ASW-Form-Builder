/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { DateControl } from './date-control';

@Component({
  selector: 'asw-datepicker-dialog',
  templateUrl: './datepicker-dialog.html'
})
export class AswDatepickerDialog implements OnInit {
    constants: any = Constants;
    aswDatepickerForm!: FormGroup;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswDatepickerDialog>,
                @Inject(MAT_DIALOG_DATA) public control: DateControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswDatepickerForm = this.formBuilder.group({
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            value: ['', []],
            column: [],
            style: ['', [Validators.required]],
            isRequired: [false]
        });
    }

    editProperty(control: DateControl): void {
        this.aswDatepickerForm.setValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            value: control.value,
            style: control.style,
            column: control.column,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        this.aswDatepickerForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswDatepickerForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
