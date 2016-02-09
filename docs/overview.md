# Overview

Sojourn is designed to be a pleasant development sandbox for building browser applications.  Sojourn knows how to handle itself for the most part, and makes a minimal amount of assumptions in order to quickly integrate with other environments if needed.

In order to build efficiently with this sandbox style environment, Sojourn has a handful of documented integration paths to show you the way to use it to augment your current project.

## A webpack-driven asset pipeline

* There is a root script entrypoint.
* Anything can be required by that entrypoint and will be compiled.
* HTML and Images aren't supported yet but are on the way.
* Production builds occur with `npm run build`
* ES6 and Sass are first-class citizens.
* Webpack knows how to bundle the basics.

### Faking APIs (Deprecated)

* There is a fake API resource presently, but in future releases this will be deprecated in favor of encouraging deliberate integrations.
* Right now we use JSON server.  Maybe it will stay as an isolation-mode fallback.

### The workflow

* Work from the javascript entrypoint inward.  Require files you need, don't worry about files you don't.
* If in isolation mode, you'll have to lift the files out as a separate task.  Maybe just use a Makefile (or its ilk) or alias.
* Work with portability in mind.
* Explicitly require all dependencies - assume nothing.
* Add entrypoints if you need to have multiples.

## How to test

* Create test files in `spec`, using the mocha BDD syntax.
* Chai's `expect` function has been put into the global scope for your convenience.
* `npm test` to run test scripts.
* `npm run tdd` puts you in a mocha watch mode, which reruns tests on file change.
