import { inject, TestBed } from '@angular/core/testing';

import { WikipediaService } from './wikipedia.service';

describe('Wikipedia Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [WikipediaService]});
  });

  it('should ...', inject([WikipediaService], (api) => {
    expect(api.title).toBe('Angular 2');
  }));
});
