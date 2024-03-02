import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuTextfieldViewComponent } from './au-textfield-view.component';

describe('AuTextfieldViewComponent', () => {
  let component: AuTextfieldViewComponent;
  let fixture: ComponentFixture<AuTextfieldViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuTextfieldViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuTextfieldViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
