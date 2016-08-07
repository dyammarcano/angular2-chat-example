/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'es6-shim';
import 'zone.js/dist/zone';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
