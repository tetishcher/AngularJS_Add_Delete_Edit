import * as angular from 'angular';

import { mainModule } from './main/main.module';


export const componentsModule = angular
    .module('app.components', [
        mainModule,
        // otherModules,
    ])
    .name;
