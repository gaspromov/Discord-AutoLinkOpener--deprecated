import { TestBed } from '@angular/core/testing';

import { SupremeService } from './supreme.service';

describe('SupremeService', () => {
  let service: SupremeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupremeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
