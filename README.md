# Sojourn

## Installation

```
git clone git@github.com:esmevane/sojourn
cd sojourn
npm install
grunt serve
```

## How to use

* Any CoffeeScript or Sass files you create in `assets/scripts` or `assets/styles` respectively will be compiled on save.
* `application.coffee` serves as the entry point for the logic of your prototype.
* Use CommonJS require-style syntax in application.coffee in order to include other files in your application.  On save, Sojourn uses browserify to compile all of these required scripts together.

## How to test

* Create test files in `test`, using the mocha BDD syntax.
* `npm test` to run test scripts.