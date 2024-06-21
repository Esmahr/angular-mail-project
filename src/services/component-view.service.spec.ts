import { TestBed } from '@angular/core/testing';

import { ComponentViewService } from './component-view.service';

describe('ComponentViewService', () => {
  let service: ComponentViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
