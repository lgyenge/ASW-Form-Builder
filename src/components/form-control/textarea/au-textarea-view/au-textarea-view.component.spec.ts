import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuTextareaViewComponent } from './au-textarea-view.component';

describe('AuTextareaViewComponent', () => {
  let component: AuTextareaViewComponent;
  let fixture: ComponentFixture<AuTextareaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuTextareaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuTextareaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
