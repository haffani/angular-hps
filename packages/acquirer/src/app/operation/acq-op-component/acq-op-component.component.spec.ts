import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcqOpComponentComponent } from './acq-op-component.component';

describe('AcqOpComponentComponent', () => {
  let component: AcqOpComponentComponent;
  let fixture: ComponentFixture<AcqOpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcqOpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcqOpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
