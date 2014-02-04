# Sojourn

Sojourn creates a rapid prototyping environment for single-page applications and compiles the output into a single, uglified application file.

## Installation

```
git clone git@github.com:esmevane/sojourn
cd sojourn
npm install
gem install sass
grunt serve
```

## This package comes with:

* CoffeeScript
* Browserify
* Mocha and Expectjs for testing
* Sass
* Bourbon and Neat modules for Sass
* FontAwesome

## How to use

* Any CoffeeScript, JavaScript or Sass files you create in `assets/scripts` or `assets/styles` respectively will be compiled on save.
* `application.coffee` serves as the entry point for the logic of your prototype.
* Use CommonJS require-style syntax in application.coffee in order to include other files in your application.  On save, Sojourn uses browserify to compile all of these required scripts together.

## How to test

* Create test files in `spec`, using the mocha BDD syntax.
* `grunt test` to run test scripts.

## TODO

* Turn into yeoman generator
