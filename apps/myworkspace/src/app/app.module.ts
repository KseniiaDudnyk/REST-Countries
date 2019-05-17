import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from 'apps/myworkspace/src/app/get-countries/countries.effects';
import { getCountries } from './app.reducer';
import { GetCountriesComponent } from './get-countries/get-countries.component';

@NgModule({
  declarations: [AppComponent, GetCountriesComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ countries: getCountries }),
    EffectsModule.forRoot([CountriesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
