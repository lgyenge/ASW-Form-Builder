import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuImageTemplateComponent } from './au-image-template.component';

describe('AuImageTemplateComponent', () => {
  let component: AuImageTemplateComponent;
  let fixture: ComponentFixture<AuImageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuImageTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuImageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
