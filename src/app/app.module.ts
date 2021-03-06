import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DBModule } from '@ngrx/db';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { appReducers, appMetaReducers } from './app.store';
import { environment } from '../environments/environment';
import { AppComponent } from './core/app/app.component';
import { CoreModule } from './core/core.module';
import { schema } from './db';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers, { metaReducers: appMetaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
    EffectsModule.forRoot([]),
    /**
     * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
     * service available.
     */
    DBModule.provideDB(schema),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
