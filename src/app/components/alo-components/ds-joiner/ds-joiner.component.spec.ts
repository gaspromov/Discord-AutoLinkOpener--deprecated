import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsJoinerComponent } from './ds-joiner.component';

describe('DsJoinerComponent', () => {
  let component: DsJoinerComponent;
  let fixture: ComponentFixture<DsJoinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsJoinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsJoinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
