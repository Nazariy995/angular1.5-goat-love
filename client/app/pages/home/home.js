import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import GoatsListingComponent from '../../containers/goatsListing/goatsListing';

let homeModule = angular.module('home', [
  uiRouter,
  GoatsListingComponent
])

.component('home', homeComponent)

.name;

export default homeModule;
