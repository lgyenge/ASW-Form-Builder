import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuFormviewerComponent } from './au-formviewer.component';

describe('AuFormviewerComponent', () => {
  let component: AuFormviewerComponent;
  let fixture: ComponentFixture<AuFormviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuFormviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuFormviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
