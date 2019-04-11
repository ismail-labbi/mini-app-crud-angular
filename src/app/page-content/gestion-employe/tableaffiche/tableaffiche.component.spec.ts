import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableafficheComponent } from './tableaffiche.component';

describe('TableafficheComponent', () => {
  let component: TableafficheComponent;
  let fixture: ComponentFixture<TableafficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableafficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableafficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
