module.exports = (grunt) ->
  gruntTasks = require('matchdep').filterDev 'grunt-*'
  grunt.loadNpmTasks task for task in gruntTasks

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    mochaTest:
      test:
        options:
          reporter: 'spec'
          require: ['babel-core/register', './spec/spec_helper.es6']
        src: ['spec/**/*.es6']
    sass:
      compile:
        expand: true
        cwd: 'assets/styles'
        src: ['**/*.sass', '**/*.scss']
        dest: 'app/styles'
        ext: ".css"
        options:
          loadPath: require('node-neat').includePaths

  grunt.registerTask 'build',   ['sass']
  grunt.registerTask 'test',    ['mochaTest']
  grunt.registerTask 'default', ['test', 'build']
