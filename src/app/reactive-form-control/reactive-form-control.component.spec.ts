import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormControlComponent } from './reactive-form-control.component';

describe('ReactiveFormControlComponent', () => {
  let component: ReactiveFormControlComponent;
  let fixture: ComponentFixture<ReactiveFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormControlComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
