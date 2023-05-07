import { Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users$ = this.api.getUsers();

  constructor(@Inject(ApiService) private readonly api: ApiService) {}
}
