import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NitroClaimerComponent } from './nitro-claimer.component';

describe('NitroClaimerComponent', () => {
  let component: NitroClaimerComponent;
  let fixture: ComponentFixture<NitroClaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NitroClaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NitroClaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
