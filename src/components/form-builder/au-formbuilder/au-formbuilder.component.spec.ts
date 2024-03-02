import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuFormbuilderComponent } from './au-formbuilder.component';

describe('AuFormbuilderComponent', () => {
  let component: AuFormbuilderComponent;
  let fixture: ComponentFixture<AuFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuFormbuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
