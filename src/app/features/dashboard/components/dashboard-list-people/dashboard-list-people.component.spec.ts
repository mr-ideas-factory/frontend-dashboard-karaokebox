import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListPeopleComponent } from './dashboard-list-people.component';

describe('DashboardListPeopleComponent', () => {
  let component: DashboardListPeopleComponent;
  let fixture: ComponentFixture<DashboardListPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
