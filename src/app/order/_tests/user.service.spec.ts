import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService, ApiService } from '../';

describe('UserService', () => {
  console.log('ROOT block describe');
  let service: UserService;

  beforeEach(() => {
    console.log('ROOT block beforeEach');

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, HttpTestingController],
    });

    service = TestBed.inject(UserService);
  });

  it('create', () => {
    console.log('ROOT block it');

    expect(service).toBeTruthy();
  });

  describe('', () => {
    console.log('the first CHILD block describe');

    beforeEach(() => {
      console.log('the first CHILD block beforeEach');
    });

    it('', () => {
      console.log('the first CHILD block it');
    });
  });

  describe('', () => {
    console.log('the second CHILD block describe');

    it('', () => {
      console.log('the second CHILD block it');
    });
  });
});
