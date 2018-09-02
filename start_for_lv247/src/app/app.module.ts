import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { appRoutes } from './app.config';

import { componentsModule } from './components/index';

import { AppComponent } from './app.component';

import { appSharedModule } from './shared/shared.module';

export const root = angular
    .module('app', [
        uiRouter,
        componentsModule,
        appSharedModule
    ])
    .component('app', AppComponent)
    .config(appRoutes)
    .name;
