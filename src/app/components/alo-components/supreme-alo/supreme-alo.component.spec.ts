import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupremeAloComponent } from './supreme-alo.component';

describe('SupremeAloComponent', () => {
  let component: SupremeAloComponent;
  let fixture: ComponentFixture<SupremeAloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupremeAloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupremeAloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
