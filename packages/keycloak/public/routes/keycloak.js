'use strict';

angular.module('mean.keycloak').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('keycloak', {
            url: '/keycloak',
            templateUrl: 'keycloak/views/index.html'
        });
    }
]);
