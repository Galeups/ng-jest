import { TestBed } from "@angular/core/testing";

import { ApiService } from "./api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ApiService", () => {
  let fakeApiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    fakeApiService = TestBed.inject(ApiService);
  });

  it("created", () => {
    expect(fakeApiService).toBeTruthy();
  });
});
