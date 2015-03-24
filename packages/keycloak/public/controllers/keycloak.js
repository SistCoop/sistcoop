'use strict';

/* jshint -W098 */
angular.module('mean.keycloak').controller('KeycloakController', ['$scope', 'Global', 'Keycloak', 'Auth',
    function($scope, Global, Keycloak, Auth) {
        $scope.global = Global;
        $scope.package = {
            name: 'keycloak'
        };

        $scope.keycloak = {};
        $scope.keycloak.user = {};
        $scope.keycloak.user = Auth.authz.idToken.preferred_username;

    }
]).controller('KeycloakLogoutController', ['$scope', 'Keycloak', 'Auth',
    function($scope, Keycloak, Auth) {

        Auth.authz.logout();

    }
]);