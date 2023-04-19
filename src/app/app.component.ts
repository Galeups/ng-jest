import { Component, Inject, OnInit } from "@angular/core";
import { UserService } from "./services";

@Component({
  selector: "app-root",
  template: `
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <span style="display: block">{{ title }} app is running!</span>

      <div *ngFor="let user of users$ | async">
        <div>{{ user.name }} ages: {{ user.age }}</div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = "ng-jest";

  readonly users$ = this.user.users$;

  constructor(@Inject(UserService) private readonly user: UserService) {}

  ngOnInit(): void {}
}
