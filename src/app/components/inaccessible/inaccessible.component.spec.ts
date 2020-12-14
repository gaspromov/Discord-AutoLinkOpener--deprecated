import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InaccessibleComponent } from './inaccessible.component';

describe('InaccessibleComponent', () => {
  let component: InaccessibleComponent;
  let fixture: ComponentFixture<InaccessibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InaccessibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InaccessibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
