import { TestBed } from '@angular/core/testing';

describe('ShoppingcartService', () => {
  let service: ShoppingcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
