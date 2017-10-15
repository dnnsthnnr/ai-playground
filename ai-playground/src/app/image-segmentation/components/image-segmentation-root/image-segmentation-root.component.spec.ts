import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSegmentationRootComponent } from './image-segmentation-root.component';

describe('ImageSegmentationRootComponent', () => {
  let component: ImageSegmentationRootComponent;
  let fixture: ComponentFixture<ImageSegmentationRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSegmentationRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSegmentationRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
