import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryToolbarComponent } from './country-toolbar.component';

describe('CountryToolbarComponent', () => {
  let component: CountryToolbarComponent;
  let fixture: ComponentFixture<CountryToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
