import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuExtComponent } from './au-ext.component';

describe('AuExtComponent', () => {
  let component: AuExtComponent;
  let fixture: ComponentFixture<AuExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AuExtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
