import { Inject, Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  readonly users$ = this.api
    .getUsers("./assets/mocks/users.json")
    .pipe(
      map((users) => users.map((user) => ({ ...user, age: user.age + 10 })))
    );

  constructor(@Inject(ApiService) private readonly api: ApiService) {}
}
