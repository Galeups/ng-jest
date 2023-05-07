import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from '../user.service';
import { ApiService } from '../api.service';
import { UserDto } from '../interfaces/user-dto';
import { of, take } from 'rxjs';

type PartialWriteble<T> = Partial<{
  -readonly [key in keyof T]: T[key];
}>;

describe('UserService', () => {
  let service: UserService;
  let mockHttpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(UserService);
    mockHttpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Get Empty list ofUsers', () => {
    it('', () => {
      const resolveEmpty: UserDto[] = [];
      const resolve: UserDto[] = [
        {
          id: 1,
          name: 'Jon',
          age: 27,
        },
      ];

      service.users$.pipe(take(1)).subscribe((users) => {
        console.log(users);
      });

      service.users$.pipe(take(1)).subscribe((users) => {
        console.log(users);
      });

      const request = mockHttpClient.match('./assets/mocks/users.json');

      request[0].flush(resolveEmpty);
      request[1].flush(resolve);
      mockHttpClient.verify();
    });
  });
});
