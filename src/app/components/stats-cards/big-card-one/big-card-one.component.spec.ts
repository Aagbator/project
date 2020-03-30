import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardOneComponent } from './big-card-one.component';

describe('BigCardOneComponent', () => {
  let component: BigCardOneComponent;
  let fixture: ComponentFixture<BigCardOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCardOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
