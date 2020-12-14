import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAloComponent } from './home-alo.component';

describe('HomeAloComponent', () => {
  let component: HomeAloComponent;
  let fixture: ComponentFixture<HomeAloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
