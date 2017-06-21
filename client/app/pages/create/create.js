import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createComponent from './create.component';
import goatCreateFormComponent from '../../containers/goatCreatorForm/goatCreatorForm';

let createModule = angular.module('create', [
  uiRouter,
  goatCreateFormComponent
])

.component('create', createComponent)

.name;

export default createModule;
