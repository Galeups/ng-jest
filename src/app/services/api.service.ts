import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserDto } from "../interfaces/user-dto";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  getUsers(url: string) {
    return this.http.get<UserDto[]>(url);
  }
}
