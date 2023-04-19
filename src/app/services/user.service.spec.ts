import { TestBed } from "@angular/core/testing";

import { UserService } from "./user.service";
import { ApiService } from "./api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("UserService", () => {
  let service: UserService;
  let api: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    api = TestBed.inject(ApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
