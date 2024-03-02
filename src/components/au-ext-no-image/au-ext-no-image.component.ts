import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';

import { Constants, TextFieldControl, TextareaControl  } from '@asoftwareworld/form-builder/form-control/core';

@Component({
  selector: 'au-ext-no-image',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './au-ext-no-image.component.html',
  styleUrls: ['./au-ext-no-image.component.css'],
})
export class AuExtNoImageComponent implements OnInit {
  @Input() isPreviewTemplate = false;
  /**
   * TextField control
   */
  @Input() control!: TextFieldControl | TextareaControl;
  // @Input() control: ExtensionControl | null = null;

  /**
   * TextField control index to help update or delete button from drop area
   */
  @Input() controlIndex!: number;
  @Output() aswModelChange = new EventEmitter<TextFieldControl>();

  constants: any = Constants;
  addNote: boolean = false;
  addImage: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addAction(control: TextFieldControl | null, controlIndex: number): void {
    /* const dialogRef = this.dialog.open(AswTextDialog, {
      disableClose: true,
      width: '744px',
      data: control,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.textFieldUpdateEvent.emit({
          control: result,
          index: controlIndex,
        });
      }
    }); */
  }

  enableAddNote(): void {
    this.control.note.isDisabled = false;
    this.addNote = true;
  }

  saveNote(control: TextareaControl): void {
    this.control.note = control;
    this.aswModelChange.emit(this.control);
    this.control.note.isDisabled = true;
  }

  cancelNote(control: TextareaControl): void {
    this.control.note.value = '';
    this.aswModelChange.emit(this.control);
    this.addNote = false;
  }

}
