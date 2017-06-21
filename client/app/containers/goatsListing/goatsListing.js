import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatsListingComponent from './goatsListing.component';
import goatsListComponent from '../../components/goatsList/goatsList';

let goatsListingModule = angular.module('goatsListing', [
  uiRouter,
  goatsListComponent
])

.component('goatsListing', goatsListingComponent)

.name;

export default goatsListingModule;
