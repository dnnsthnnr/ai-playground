import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SketchClassifierComponent} from './sketch-classifier.component';

describe('SketchClassifierComponent', () => {
  let component: SketchClassifierComponent;
  let fixture: ComponentFixture<SketchClassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SketchClassifierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
