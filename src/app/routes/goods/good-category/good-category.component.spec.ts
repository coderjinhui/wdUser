import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodCategoryComponent } from './good-category.component';

describe('GoodCategoryComponent', () => {
  let component: GoodCategoryComponent;
  let fixture: ComponentFixture<GoodCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
