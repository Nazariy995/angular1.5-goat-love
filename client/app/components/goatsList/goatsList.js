import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatsListComponent from './goatsList.component';
import goatListItemComponent from '../goatListItem/goatListItem';

let goatsListModule = angular.module('goatsList', [
  uiRouter,
  goatListItemComponent
])

.component('goatsList', goatsListComponent)

.name;

export default goatsListModule;
