import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardOneComponent } from './small-card-one.component';

describe('SmallCardOneComponent', () => {
  let component: SmallCardOneComponent;
  let fixture: ComponentFixture<SmallCardOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCardOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
