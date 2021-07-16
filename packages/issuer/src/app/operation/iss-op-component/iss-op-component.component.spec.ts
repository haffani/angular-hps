import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssOpComponentComponent } from './iss-op-component.component';

describe('AcqOpComponentComponent', () => {
  let component: IssOpComponentComponent;
  let fixture: ComponentFixture<IssOpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssOpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssOpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
