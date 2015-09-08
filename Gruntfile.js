module.exports = function(grunt) {
    // Loads each task referenced in the packages.json file
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    var mySecret = false;
    if (grunt.file.exists('secret.json')) {
        mySecret = grunt.file.readJSON('secret.json');
    }


    // Initiate grunt tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        moment: require('moment'),


    });

    // ----------------------------------------------------------
    // Tasks

    // Register tasks




};
