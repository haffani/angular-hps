import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssParamComponentComponent } from './iss-param-component.component';

describe('IssParamComponentComponent', () => {
  let component: IssParamComponentComponent;
  let fixture: ComponentFixture<IssParamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssParamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssParamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
