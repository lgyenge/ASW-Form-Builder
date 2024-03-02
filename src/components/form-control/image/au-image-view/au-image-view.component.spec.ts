import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuImageViewComponent } from './au-image-view.component';

describe('AuImageViewComponent', () => {
  let component: AuImageViewComponent;
  let fixture: ComponentFixture<AuImageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuImageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
