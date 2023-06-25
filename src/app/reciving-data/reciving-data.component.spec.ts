import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivingDataComponent } from './reciving-data.component';

describe('RecivingDataComponent', () => {
  let component: RecivingDataComponent;
  let fixture: ComponentFixture<RecivingDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecivingDataComponent]
    });
    fixture = TestBed.createComponent(RecivingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
