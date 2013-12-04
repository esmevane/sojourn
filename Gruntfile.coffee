module.exports = (grunt) ->
  gruntTasks = require('matchdep').filterDev 'grunt-*'
  grunt.loadNpmTasks task for task in gruntTasks

  grunt.initConfig
    pkg:     grunt.file.readJSON 'package.json'
    browserify:
      compile:
        files:
          'app/scripts/application.js': [ 'tmp/scripts/application.js' ]
    coffee:
      compile:
        expand: true
        cwd: 'assets/scripts'
        src: [ '**/*.coffee' ]
        dest: 'tmp/scripts'
        ext: ".js"
    express:
      server:
        options:
          port: 9000
          server: './server'
    mochaTest:
      test:
        options:
          reporter: 'spec'
          require: [ 'expect.js', 'coffee-script' ]
        src: [ 'spec/**/*.coffee' ]
    sass:
      compile:
        expand: true
        cwd: 'assets/styles'
        src: [ '**/*.sass' ]
        dest: 'app/styles'
        ext: ".css"
    watch:
      express:
        files: [ 'assets/**/*.coffee', 'assets/**/*.sass' ]
        tasks: [ 'build' ]

  grunt.registerTask 'serve', [ 'express', 'watch' ]
  grunt.registerTask 'build', [ 'coffee', 'sass', 'browserify' ]
  grunt.registerTask 'test', [ 'mochaTest' ]