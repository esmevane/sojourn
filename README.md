# Sojourn

Sojourn creates a rapid prototyping / sandboxing environment for single-page applications and compiles the output into a single, uglified application file.

## Installation

This environment uses SASS and ES6 as personal tools.  This is just a personal preference and tweaking those options is pretty straightforward.  Look at previous commits to see how CoffeeScript and Grunt were used ubiquitously in the project if you prefer it.

```
git clone git@github.com:esmevane/sojourn
cd sojourn
npm install
npm run dev
```

## This package comes with:

* Babel.js
* Webpack
* Mocha and Chai for testing
* Sass
* Bourbon and Neat modules for Sass
* React
* Hot loading for React / CSS

## How to use

* The entry point of the compilation workflow is in `assets/scripts/index.es6`.  Essentially this file is recognized as a bootstrap point for app functionality.
* Webpack encourages you to think of all assets as resources which you can require using a CommonJS `require` statement.  Right now Sojourn only supports ES6 and Sass, but loaders are everywhere and plentiful.
* Use CommonJS require-style syntax in `application.es6` in order to include other files in your application.  On save while in dev mode (`npm run dev`), Sojourn will compile chunks of your code to keep a running build going - and certain changes, it will actually push to your browser without you needing a refresh.
* Product a minified version by running `npm run build`.  This will give you an uglified javascript and an `application.css` with all of your required styles.

## How to test

* Create test files in `spec`, using the mocha BDD syntax.
* Chai's `expect` function has been put into the global scope for your convenience.  Swap out the `expect` function in `spec_helper.es6` if you'd prefer something different.
* `npm test` to run test scripts
