import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLanguagesComponent } from './common-languages.component';

describe('CommonLanguagesComponent', () => {
  let component: CommonLanguagesComponent;
  let fixture: ComponentFixture<CommonLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
