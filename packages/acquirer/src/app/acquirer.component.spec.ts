import { TestBed, async } from '@angular/core/testing';
import { AcquirerComponent } from './acquirer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AcquirerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AcquirerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'acquirer'`, () => {
    const fixture = TestBed.createComponent(AcquirerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('acquirer');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AcquirerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('acquirer app is running!');
  });
});
