module.exports = function(grunt) {
    // Loads each task referenced in the packages.json file
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    //var mySecret = false;
    //if (grunt.file.exists('secret.json')) {
    //    mySecret = grunt.file.readJSON('secret.json');
    //}


    // Initiate grunt tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        moment: require('moment'),

        m2j: {
            release: {
                options: {
                    minify: false,
                    width: 10000
                },
                files: {
                    'bower_components/api/sections.json': ['content/*.md']
                },
            }
        }

    });

    // ----------------------------------------------------------
    // Tasks

    // Register tasks
    grunt.registerTask('default', ['m2j']);



};
