import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CARootComponent } from './caroot.component';

describe('CARootComponent', () => {
  let component: CARootComponent;
  let fixture: ComponentFixture<CARootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CARootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CARootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
