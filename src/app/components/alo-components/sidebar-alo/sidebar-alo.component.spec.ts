import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAloComponent } from './sidebar-alo.component';

describe('SidebarAloComponent', () => {
  let component: SidebarAloComponent;
  let fixture: ComponentFixture<SidebarAloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
