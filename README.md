# Sojourn

Sojourn creates a rapid prototyping / sandboxing environment for single-page applications and compiles the output into a single, uglified application file.

## Installation

This environment uses SASS and ES6 as personal tools, and has a limited use of CoffeeScript as a configuration language (only in the project root).  This is just a personal preference and tweaking those options is pretty straightforward.  Look at previous commits to see how CoffeeScript was used ubiquitously in the project if you prefer it.

Other than the Node.js ecosystem, there are a few recommended tools in order to use Sojourn productively, mostly [chruby](https://github.com/postmodern/chruby) and [gem_home](https://github.com/postmodern/gem_home).

Go and set those up (or your preferred ruby switcher; it is probably a good idea to employ a ruby switcher), and then follow the process below:

```
git clone git@github.com:esmevane/sojourn
cd sojourn
npm install
gem_home .
bundle
grunt serve
```

## This package comes with:

* Babel.js
* Browserify
* Mocha and Chai for testing
* Sass
* Bourbon and Neat modules for Sass

## How to use

* Any ES6, JavaScript or Sass files you create in `assets/scripts` or `assets/styles` respectively will be compiled on save.
* `application.es6` serves as the entry point for the logic of your prototype and should be used to boostrap any components you need.
* Use CommonJS require-style syntax in `application.es6` in order to include other files in your application.  On save, Qbox Frontend Components use browserify to compile all of these required scripts together.  The output is in `app/scripts/application.js` and a minified and uglified version is in `app/scripts/application.min.js`

## How to test

* Create test files in `spec`, using the mocha BDD syntax.
* Chai's `expect` function has been put into the global scope for your convenience.
* `grunt test` to run test scripts.
* `grunt` default is just test followed by a build.
