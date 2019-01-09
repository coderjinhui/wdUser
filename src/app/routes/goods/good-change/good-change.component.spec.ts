import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodChangeComponent } from './good-change.component';

describe('GoodChangeComponent', () => {
  let component: GoodChangeComponent;
  let fixture: ComponentFixture<GoodChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
