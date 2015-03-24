'use strict';

/* jshint -W098 */
angular.module('mean.keycloak').controller('KeycloakController', ['$scope', 'Global', 'Keycloak', 'Auth',
    function($scope, Global, Keycloak, Auth) {
        $scope.global = Global;
        $scope.package = {
            name: 'keycloak'
        };

        $scope.keycloak = {};
        console.log(Auth);
    }
]);