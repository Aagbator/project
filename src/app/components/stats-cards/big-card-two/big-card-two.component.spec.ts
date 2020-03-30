import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardTwoComponent } from './big-card-two.component';

describe('BigCardTwoComponent', () => {
  let component: BigCardTwoComponent;
  let fixture: ComponentFixture<BigCardTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCardTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
