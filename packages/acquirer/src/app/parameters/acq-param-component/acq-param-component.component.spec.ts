import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcqParamComponentComponent } from './acq-param-component.component';

describe('AcqParamComponentComponent', () => {
  let component: AcqParamComponentComponent;
  let fixture: ComponentFixture<AcqParamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcqParamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcqParamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
