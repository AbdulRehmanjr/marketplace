import { TestBed } from '@angular/core/testing';

import { FavouriteproductService } from './favouriteproduct.service';

describe('FavouriteproductService', () => {
  let service: FavouriteproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
