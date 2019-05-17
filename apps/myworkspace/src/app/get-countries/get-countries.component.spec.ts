import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCountriesComponent } from './get-countries.component';

describe('GetCountriesComponent', () => {
  let component: GetCountriesComponent;
  let fixture: ComponentFixture<GetCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
