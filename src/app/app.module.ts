import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from '@angular/material';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import 'hammerjs';

import { AppComponent } from './app.component';
import {Home} from './home/home';

@NgModule({
  declarations: [
    AppComponent,
	Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    HttpModule,
	MaterialModule.forRoot(),
	RouterModule.forRoot(rootRouterConfig)
  ],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy},  {  	provide: "windowObject", useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule {
	 constructor(private _appRef: ApplicationRef) {
    }

    ngDoBootstrap() {
        this._appRef.bootstrap(AppComponent);
    }
 }
