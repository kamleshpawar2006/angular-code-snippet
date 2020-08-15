import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpandCollapseMultipleRowComponent } from './table-expand-collapse-multiple-row.component';

describe('TableExpandCollapseMultipleRowComponent', () => {
  let component: TableExpandCollapseMultipleRowComponent;
  let fixture: ComponentFixture<TableExpandCollapseMultipleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpandCollapseMultipleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpandCollapseMultipleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
