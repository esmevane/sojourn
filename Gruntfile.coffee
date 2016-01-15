module.exports = (grunt) ->
  gruntTasks = require('matchdep').filterDev 'grunt-*'
  grunt.loadNpmTasks task for task in gruntTasks

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    browserify:
      assets:
        expand: true
        cwd: 'tmp/src/assets'
        src: ['*.js', '!**/_*.js']
        dest: 'app/scripts'
      lib:
        expand: true
        cwd: 'tmp/src/lib'
        src: ['*.js', '!**/_*.js']
        dest: 'app/scripts/lib'
    babel:
      options:
        sourceMap: true
      assets:
        expand: true
        cwd: 'assets/scripts'
        src: ['**/*.es6']
        dest: 'tmp/src/assets'
        ext: '.js'
      lib:
        expand: true
        cwd: 'lib/'
        src: ['**/*.es6']
        dest: 'tmp/src/lib'
        ext: '.js'
    clean:
      tmp: ['tmp/src/**/*.js']
    copy:
      assets:
        expand: true
        cwd: 'assets/scripts'
        src: ['**/*.js']
        dest: 'tmp/src/assets'
      lib:
        expand: true
        cwd: 'lib'
        src: ['**/*.js']
        dest: 'tmp/src/lib'
    express:
      server:
        options:
          port: 9001
          server: './server'
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
    uglify:
      build:
        expand: true
        cwd: 'app/scripts'
        src: ['**/*.js', '!**/*.min.js']
        dest: 'app/scripts'
        ext: '.min.js'
    watch:
      express:
        files: [
          'assets/**/*.es6'
          'assets/**/*.js'
          'assets/**/*.sass'
          'assets/**/*.scss'
        ]
        tasks: ['build']

  grunt.registerTask 'serve',   ['express', 'watch']
  grunt.registerTask 'compile', ['sass', 'browserify', 'uglify']
  grunt.registerTask 'prepare', ['babel', 'copy']
  grunt.registerTask 'build',   ['prepare', 'compile', 'clean']
  grunt.registerTask 'test',    ['mochaTest']

  grunt.registerTask 'default', ['test', 'build']
