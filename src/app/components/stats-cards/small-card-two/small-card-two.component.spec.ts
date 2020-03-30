import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardTwoComponent } from './small-card-two.component';

describe('SmallCardTwoComponent', () => {
  let component: SmallCardTwoComponent;
  let fixture: ComponentFixture<SmallCardTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCardTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
