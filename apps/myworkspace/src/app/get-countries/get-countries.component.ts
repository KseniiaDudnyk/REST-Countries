import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../countries.interface';

@Component({
  selector: 'myworkspace-get-countries',
  templateUrl: './get-countries.component.html',
  styleUrls: ['./get-countries.component.css']
})
export class GetCountriesComponent implements OnInit {
  countries$: Observable<Country[]>;

  constructor() { }

  ngOnInit() {
  }

}
