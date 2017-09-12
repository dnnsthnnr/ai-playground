import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SketchDrawComponent} from './sketch-draw.component';

describe('SketchDrawComponent', () => {
  let component: SketchDrawComponent;
  let fixture: ComponentFixture<SketchDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SketchDrawComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
