import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipechartComponent } from './pipechart.component';

describe('PipechartComponent', () => {
  let component: PipechartComponent;
  let fixture: ComponentFixture<PipechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
