import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAddComponent } from './pay-add.component';

describe('PayAddComponent', () => {
  let component: PayAddComponent;
  let fixture: ComponentFixture<PayAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
