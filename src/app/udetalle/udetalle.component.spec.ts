import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdetalleComponent } from './udetalle.component';

describe('UdetalleComponent', () => {
  let component: UdetalleComponent;
  let fixture: ComponentFixture<UdetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
