import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsOpenerComponent } from './ds-opener.component';

describe('DsOpenerComponent', () => {
  let component: DsOpenerComponent;
  let fixture: ComponentFixture<DsOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
