import { TestBed } from '@angular/core/testing';

import { ViewBusesService } from './view-buses.service';

describe('ViewBusesService', () => {
  let service: ViewBusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
