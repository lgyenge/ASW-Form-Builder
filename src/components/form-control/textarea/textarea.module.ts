/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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

import { AswTextarea } from './textarea';
import { AuTextarea } from './au-textarea';
import { AuExtComponent } from '@asoftwareworld/form-builder/au-ext';
import { AuTextareaViewComponent } from './au-textarea-view/au-textarea-view.component';
import { AuTextareaTemplateComponent } from './au-textarea-template/au-textarea-template.component';


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
        AuExtComponent
    ],
    declarations: [
        AswTextarea,
        AuTextarea,
        AuTextareaViewComponent,
        AuTextareaTemplateComponent
    ],
    exports: [
        AswTextarea,
        AuTextarea
    ]
})
export class AswTextareaModule { }
