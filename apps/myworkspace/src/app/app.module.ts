import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'apps/myworkspace/src/app/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { CountryButtonComponent } from './country-button/country-button.component';
import { CountryDialogComponent } from './country-dialog/country-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContentContainerComponent } from './content-container/content-container.component';
import {
  APP_FEATURE_KEY,
  initialState as appInitialState,
  appReducer
} from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { CountryToolbarComponent } from './country-toolbar/country-toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: ContentContainerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentContainerComponent,
    CountryButtonComponent,
    CountryDialogComponent,
    CountryToolbarComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { app: appReducer },
      {
        initialState: { app: appInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [CountryDialogComponent]
})
export class AppModule {}
