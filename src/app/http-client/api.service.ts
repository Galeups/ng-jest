import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../order/interfaces/user-dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly url = './assets/mocks/users.json';
  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  getUsers() {
    return this.http.get<UserDto[]>(this.url);
  }
}
