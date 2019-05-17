import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './countries.interface';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  constructor(private http: HttpClient) {  }

  getAll(){
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }
}
