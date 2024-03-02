import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuTextareaTemplateComponent } from './au-textarea-template.component';

describe('AuTextareaTemplateComponent', () => {
  let component: AuTextareaTemplateComponent;
  let fixture: ComponentFixture<AuTextareaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuTextareaTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuTextareaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
