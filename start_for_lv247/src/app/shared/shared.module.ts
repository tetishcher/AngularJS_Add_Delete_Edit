import * as angular from 'angular';

import { dataManipulationModule } from './data-manipulation/data-manipulation.module';

export const appSharedModule = angular
    .module('app.shared', [dataManipulationModule])
    .name;

