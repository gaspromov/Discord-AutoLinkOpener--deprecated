import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAloComponent } from './app-alo.component';

describe('AppAloComponent', () => {
  let component: AppAloComponent;
  let fixture: ComponentFixture<AppAloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
