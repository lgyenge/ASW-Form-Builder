import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuTextfieldTemplateComponent } from './au-textfield-template.component';

describe('AuTextfieldTemplateComponent', () => {
  let component: AuTextfieldTemplateComponent;
  let fixture: ComponentFixture<AuTextfieldTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuTextfieldTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuTextfieldTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
