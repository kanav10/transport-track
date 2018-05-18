import { TestBed, inject } from '@angular/core/testing';

import { ChatmapService } from './chatmap.service';

describe('MapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatmapService]
    });
  });

  it('should be created', inject([ChatmapService], (service: ChatmapService) => {
    expect(service).toBeTruthy();
  }));
});
