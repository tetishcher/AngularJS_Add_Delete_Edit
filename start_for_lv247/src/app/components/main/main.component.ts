import './style.scss';
import { MainController } from './main.controller';

export const Main: angular.IComponentOptions = {
    template: require('./main.component.html'),
    controller: MainController
};
