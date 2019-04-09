import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlistaComponent } from './ulista.component';

describe('UlistaComponent', () => {
  let component: UlistaComponent;
  let fixture: ComponentFixture<UlistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
