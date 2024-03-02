/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CommonModule } from '@angular/common';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AswConfirmDialogModule } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { AswSharedDialogModule } from '@asoftwareworld/form-builder/form-control/core';

import { AswTextField } from './textfield';
import { AuTextField } from './au-textfield';
import { AuExtComponent } from '@asoftwareworld/form-builder/au-ext';
import { AuTextfieldTemplateComponent } from './au-textfield-template/au-textfield-template.component';
import { AuTextfieldViewComponent } from './au-textfield-view/au-textfield-view.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatDividerModule,
        MatIconModule,
        AswConfirmDialogModule,
        MatButtonModule,
        AswSharedDialogModule,
        AuExtComponent,
    ],
    declarations: [
        AswTextField,
        AuTextField,
        AuTextfieldTemplateComponent,
        AuTextfieldViewComponent
    ],
    exports: [
        AswTextField,
        AuTextField
    ]
})
export class AswTextFieldModule { }

