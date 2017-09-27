import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTransferRootComponent } from './style-transfer-root.component';

describe('StyleTransferRootComponent', () => {
  let component: StyleTransferRootComponent;
  let fixture: ComponentFixture<StyleTransferRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleTransferRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTransferRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
