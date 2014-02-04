module.exports = (grunt) ->
  gruntTasks = require('matchdep').filterDev 'grunt-*'
  grunt.loadNpmTasks task for task in gruntTasks

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    browserify:
      compile:
        files:
          'tmp/pkg/scripts/application.js': ['tmp/src/scripts/application.js']
    coffee:
      compile:
        expand: true
        cwd: 'assets/scripts'
        src: ['**/*.coffee']
        dest: 'tmp/src/scripts'
        ext: ".js"
    copy:
      scripts:
        expand: true
        cwd: 'assets/scripts'
        src: ['**/*.js']
        dest: 'tmp/src/scripts'
    express:
      server:
        options:
          port: 9000
          server: './server'
    mochaTest:
      test:
        options:
          reporter: 'spec'
          require: ['coffee-script', './spec/spec_helper.coffee']
        src: ['spec/**/*.coffee']
    sass:
      compile:
        expand: true
        cwd: 'assets/styles'
        src: ['**/*.sass']
        dest: 'app/styles'
        ext: ".css"
    uglify:
      build:
        files:
          'app/scripts/application.js': ['tmp/pkg/scripts/application.js']
    watch:
      express:
        files: ['assets/**/*.coffee', 'assets/**/*.sass']
        tasks: ['build']

  grunt.registerTask 'serve', ['express', 'watch']
  grunt.registerTask 'build', ['coffee', 'copy', 'sass', 'browserify', 'uglify']
  grunt.registerTask 'test', ['mochaTest']