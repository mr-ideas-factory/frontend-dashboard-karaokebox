import { TestBed } from '@angular/core/testing';

import { DashboardListSongsService } from './dashboard-list-songs.service';

describe('DashboardListSongsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardListSongsService = TestBed.get(DashboardListSongsService);
    expect(service).toBeTruthy();
  });
});
