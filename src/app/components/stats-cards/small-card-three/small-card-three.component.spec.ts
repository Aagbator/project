import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardThreeComponent } from './small-card-three.component';

describe('SmallCardThreeComponent', () => {
  let component: SmallCardThreeComponent;
  let fixture: ComponentFixture<SmallCardThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCardThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
