import { TestBed } from "@angular/core/testing";

import { UserService } from "./user.service";
import { ApiService } from "./api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("UserService", () => {
  let fakeUserService: UserService;
  let fakeApiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    fakeUserService = TestBed.inject(UserService);
    fakeApiService = TestBed.inject(ApiService);
  });

  it("should be created", () => {
    expect(fakeUserService).toBeTruthy();
  });
});
