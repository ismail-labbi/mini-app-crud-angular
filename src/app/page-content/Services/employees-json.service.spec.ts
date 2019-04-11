import { TestBed } from '@angular/core/testing';

import { EmployeesJsonService } from './employees-json.service';

describe('EmployeesJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesJsonService = TestBed.get(EmployeesJsonService);
    expect(service).toBeTruthy();
  });
});
