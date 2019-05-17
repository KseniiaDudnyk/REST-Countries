import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from '@ngrx/store';
import { getData } from './app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ data: getData })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
