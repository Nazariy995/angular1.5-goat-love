import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatCreatorFormComponent from './goatCreatorForm.component';

let goatCreatorFormModule = angular.module('goatCreatorForm', [
  uiRouter
])

.component('goatCreatorForm', goatCreatorFormComponent)

.name;

export default goatCreatorFormModule;
