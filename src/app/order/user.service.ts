import { Inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isEmpty = false;

  readonly users$ = this.api.getUsers().pipe(
    map((users) => users.map((user) => ({ ...user, age: user.age + 10 }))),
    tap((users) => {
      this.isEmpty = !users.length;
    })
  );

  constructor(@Inject(ApiService) private readonly api: ApiService) {}
}
