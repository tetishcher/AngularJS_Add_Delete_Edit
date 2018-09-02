import * as angular from 'angular';

import { mainRoutes } from './main.config';

import { Main } from './main.component';

export const mainModule = angular
    .module('app.components.main', [])
    .component('main', Main)
    .config(mainRoutes)
    .name;
