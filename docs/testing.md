# Script testing

## Usage

Run the test suite with this command:

```bash
npm test
```

## Suite syntax

The test suite uses [mocha](https://mochajs.org/) for the suite runner, in order to use the BDD-style `describe`/`it` keywords.  Mocha also does a good deal of practical things, for example providing a versatile and platform-portable outputs depending on your preference.

To tweak these settings, look in the `package.json` contents at the `scripts` entry.

## Assertion syntax

Assertions are done with [chai](http://chaijs.com/), specifically the [expect style](http://chaijs.com/guide/styles/#expect).

## Spec file names

Nothing specific - any `.es6` file in the directory will be globbed and run, so long as it has mocha suite syntax.

## Making global helper methods

Any helper methods or other globally accessible tools can be put into `spec/spec_helper.es6`, and explicitly placed on the global namespace.  Anything in there will be bootstrapped before any specs are run.  For example, the bare spec helper looks like this:

```javascript
let { expect } = require('chai')

if (global) { global.expect = expect }
```

That requires [chai](http://chaijs.com/), grabs the `expect` assertion from it, and then places it on `global.expect`.  After doing that, `expect` becomes available in any test.

## Existing tests

The existing test suite has a ton of examples in it.  When in doubt just refer to the existing stuff.
