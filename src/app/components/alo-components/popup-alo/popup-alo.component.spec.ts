import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAloComponent } from './popup-alo.component';

describe('PopupAloComponent', () => {
  let component: PopupAloComponent;
  let fixture: ComponentFixture<PopupAloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
