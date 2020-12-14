import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAloComponent } from './settings-alo.component';

describe('SettingsAloComponent', () => {
  let component: SettingsAloComponent;
  let fixture: ComponentFixture<SettingsAloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
