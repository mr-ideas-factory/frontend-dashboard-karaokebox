import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListSongsComponent } from './dashboard-list-songs.component';

describe('DashboardListSongsComponent', () => {
  let component: DashboardListSongsComponent;
  let fixture: ComponentFixture<DashboardListSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
