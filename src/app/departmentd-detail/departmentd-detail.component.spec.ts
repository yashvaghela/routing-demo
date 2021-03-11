import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentdDetailComponent } from './departmentd-detail.component';

describe('DepartmentdDetailComponent', () => {
  let component: DepartmentdDetailComponent;
  let fixture: ComponentFixture<DepartmentdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentdDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
