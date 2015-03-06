/**
 * Created by Anis on 06/03/2015.
 */

/* global module:false */
module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    require("time-grunt")(grunt);

    // Configuration to avoid repetition in tasks
    var globals = {
        appDir: "app",
        distDir: "dist",
        tmpDir: ".tmp"
    };

    grunt.initConfig({

        env : {
            dev : {
                "NODE_ENV" : "DEV"
            },
            prod : {
                "NODE_ENV" : "PROD"
            }
        },
        preprocess : {
            prod : {
                src : globals.appDir + "/index-template.html",
                dest : globals.distDir + "/index.html"
            }
        },


        wiredep: {
            dev : {
                src: [globals.distDir + "/index.html"]
            }
        },
        copy : {
            main: {
                files: [
                    // makes all src relative to cwd
                    {expand: true, cwd: globals.appDir, src: ['**', "!index-template.html"], dest: globals.distDir}
                ]
            }
        },


        useminPrepare: {
            html: globals.distDir + '/index.html'
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                        globals.distDir + '/vendors/angular/angular.min.js',
                        globals.distDir + '/vendors/angular-route/angular-route.min.js',
                        globals.distDir + '/vendors/requirejs/require.js'
                ],
                dest: globals.distDir + '/vendors.min.js'
            }
        },
        uglify: {
            dist: {
                files: [{
                    src: [globals.distDir + '/vendors.min.js'],
                    dest: globals.distDir + '/vendors.min.js'
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    src: [globals.distDir + '/vendors/bootstrap/dist/css/bootstrap.css'],
                    dest: globals.distDir + '/vendors.min.css'
                }, {
                    src: [globals.distDir + '/css/cover.css'],
                    dest: globals.distDir + '/css/cover.css'
                }, {
                    src: [globals.distDir + '/css/blog.css'],
                    dest: globals.distDir + '/css/blog.css'
                }]
            }
        },
        usemin : {
            html : [globals.distDir + '/index.html'],
            css : [globals.distDir + '/css/{,*/}*.css']
        },
        clean: {
            dist: {
                src: [globals.distDir + "/vendors"]
            }
        }


    });

    grunt.registerTask("dist", [
        "copy",
        "env:prod",
        "preprocess",
        "wiredep",
        "useminPrepare",
        "concat",
        "uglify",
        "cssmin",
        "usemin"
    ]);

};
