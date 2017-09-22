import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeplearnConvolutionalVisualiserComponent } from './deeplearn-convolutional-visualiser.component';

describe('DeeplearnConvolutionalVisualiserComponent', () => {
  let component: DeeplearnConvolutionalVisualiserComponent;
  let fixture: ComponentFixture<DeeplearnConvolutionalVisualiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeeplearnConvolutionalVisualiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeplearnConvolutionalVisualiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
