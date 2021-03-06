'use strict';

angular.module('dz5')
  .config(function($stateProvider,menuProvider) {

    var permissionOnly = ['guest','user','admin'];

    $stateProvider
      .state('other', {
        url: '/other',
        templateUrl: 'app/other/other.html',
        controller: 'OtherCtrl',
        data:{
          permissions: {
            only: permissionOnly
          }
        }
      });

    menuProvider.add('Page 2','other', permissionOnly);
  });
