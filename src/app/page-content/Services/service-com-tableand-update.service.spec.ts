import { TestBed } from '@angular/core/testing';

import { ServiceComTableandUpdateService } from './service-com-tableand-update.service';

describe('ServiceComTableandUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceComTableandUpdateService = TestBed.get(ServiceComTableandUpdateService);
    expect(service).toBeTruthy();
  });
});
