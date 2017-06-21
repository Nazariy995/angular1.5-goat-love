import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import NavigationComponent from './components/navigation/navigation';  
import HomeComponent from './pages/home/home';
import CreateComponent from './pages/create/create';

import GoatsService from './services/GoatsService';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
    uiRouter,
    NavigationComponent,
    HomeComponent,
    CreateComponent
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";

    // Define our app routing, we will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of our app views
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            template: '<app></app>'
        })

        // Dashboard page to contain our goats list page
        .state('app.home', {
            url: '/home',
            template: '<home></home>'
        })

        // Create route for our goat listings creator
        .state('app.create', {
            url: '/create',
            template: '<create><create>'
        });

   // Default page for the router
   $urlRouterProvider.otherwise('/app/home');
})
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)
  .factory('GoatsService', GoatsService);
