import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  countryList$: Observable<Country[]> = this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');

  constructor(private http: HttpClient) {  }
}
