import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SketchRootComponent} from './sketch-root.component';

describe('SketchRootComponent', () => {
  let component: SketchRootComponent;
  let fixture: ComponentFixture<SketchRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SketchRootComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
