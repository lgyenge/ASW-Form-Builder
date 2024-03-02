/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, OnInit } from '@angular/core';
import { TextFieldControl } from '@asoftwareworld/form-builder/form-control/textfield';

@Component({
    templateUrl: './textbox-demo.component.html'
})
export class TextFieldDemoComponent implements OnInit {
    title = 'ASW-Form-Builder-demo';
    username: any = {};
    firstname: any = {};

    ngOnInit(): void {
        this.username = USERNAME;
        this.firstname = FIRSTNAME;
    }
}

const USERNAME: TextFieldControl =
{
    id: '1',
    controlType: '',
    tooltip: 'Enter Username',
    value: '',
    label: 'Username',
    style: 'outline',
    isRequired: true,
    maxlength: 50,
    minlength: 0,
    note: {
      id: '1',
      controlType: 'textfield',
      tooltip: 'Enter Text',
      value: '',
      label: 'Text Field',
      style: 'outline',
      column: 'col-md-6',
      isRequired: false,
      isDisabled: false,
      maxlength: 50,
      minlength: 0,
    },

    media: {
      id: '1',
      tooltip: 'Enter Text',
      controlType: 'image',
      label: 'Image',
      isRequired: false,
    },
    action: {
      id: '1',
      tooltip: 'Enter Text',
      controlType: 'image',
      label: 'Image',
      isRequired: false,
    },
};

const FIRSTNAME: any =
{
    tooltip: 'Enter Firstname',
    value: '',
    type: 'text',
    label: 'Firstname',
    style: 'outline',
    isRequired: true,
    maxlength: 50
};

