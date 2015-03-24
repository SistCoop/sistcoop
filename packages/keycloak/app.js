'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Keycloak = new Module('keycloak');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Keycloak.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Keycloak.routes(app, auth, database);

    Keycloak.aggregateAsset('css', 'keycloak.css');

    Keycloak.aggregateAsset('js', '../lib/keycloak/dist/keycloak.js');

    return Keycloak;
});
