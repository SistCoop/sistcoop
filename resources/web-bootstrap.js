'use strict';
/* global jQuery:true */

angular.element(document).ready(function() {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    //keycloak init
    var configUrl = "/keycloak/keycloak.json";
    var auth = {};
    var keycloakAuth = new Keycloak(configUrl);
    keycloakAuth.onAuthLogout = function() {
        location.reload();
    };
    keycloakAuth.init({ onLoad: "login-required" }).success(function () {
        auth.authz = keycloakAuth;
        var app = angular.module("mean");
        app.factory('Auth', function() {
            return auth;
        });
        angular.bootstrap(document, ["mean"]);
    }).error(function () {
        window.location.reload();
    });

});

function processModules(modules) {
    var packageModules = ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router'],m,mn;
    for (var index in modules) {
        m = modules[index];
        mn = 'mean.'+m.name;
        angular.module(mn, m.angularDependencies || []);
        packageModules.push(mn);
    }

    angular.module('mean', packageModules);
}

jQuery.ajax('/_getModules', {
    dataType: 'json',
    async:false,
    success: processModules
});

