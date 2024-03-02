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
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AswConfirmDialogModule } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { AswImageCropModule } from '@asoftwareworld/form-builder/image-crop';
import { AswImage } from './image';
import { AswImageDialog } from './image-dialog';
import { AswImageUploadDialog } from './image-upload-dialog';

import { AuImage } from './au-image';
import { AuExtNoImageComponent } from '@asoftwareworld/form-builder/au-ext-no-image';
import { AuImageTemplateComponent } from './au-image-template/au-image-template.component';
import { AuImageViewComponent } from './au-image-view/au-image-view.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AswImageCropModule,
        MatDividerModule,
        MatTooltipModule,
        MatDialogModule,
        MatIconModule,
        AswConfirmDialogModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        AuExtNoImageComponent

    ],
    declarations: [
        AswImage,
        AswImageDialog,
        AswImageUploadDialog,
        AuImage,
        AuImageTemplateComponent,
        AuImageViewComponent

    ],
    exports: [
        AswImage,
        AswImageDialog,
        AswImageUploadDialog,
        AuImage
    ]
})
export class AswImageModule { }
