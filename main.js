/**
 * Created by Anis on 24/01/2015.
 */

define([], function () {
    angular.module('community', ["ngRoute"])
        .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
            var viewsPath = "views";
            $routeProvider
                .otherwise({
                    redirectTo : "/blog"
                })
                .when('/', {
                    templateUrl: viewsPath + '/cover.html',
                    resolve: {
                        load: ["$rootScope", function($rootScope) {
                            $rootScope.page = 'cover';
                        }]
                    }
                })
                .when('/blog', {
                    templateUrl: viewsPath + '/blog.html',
                    resolve: {
                        load: ["$rootScope", function($rootScope) {
                            $rootScope.page = 'blog';
                        }]
                    }
                });

            $locationProvider.html5Mode(false);
        }]);
    angular.bootstrap(document, ["community"])
});