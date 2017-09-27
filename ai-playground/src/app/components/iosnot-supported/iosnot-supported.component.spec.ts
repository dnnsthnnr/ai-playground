import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOSNotSupportedComponent } from './iosnot-supported.component';

describe('IOSNotSupportedComponent', () => {
  let component: IOSNotSupportedComponent;
  let fixture: ComponentFixture<IOSNotSupportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOSNotSupportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOSNotSupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
