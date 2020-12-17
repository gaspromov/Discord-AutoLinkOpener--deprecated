import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupremeLogsComponent } from './supreme-logs.component';

describe('SupremeLogsComponent', () => {
  let component: SupremeLogsComponent;
  let fixture: ComponentFixture<SupremeLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupremeLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupremeLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
