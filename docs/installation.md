# Installation

This environment uses SASS and ES6 (by way of Babel.js).  It's not that hard to configure Webpack to support other things, for example CoffeeScript or LESS.  A lot of that is generally up to you.

Past versions of Sojourn had a reliance on Ruby to handle SASS building.  Nowadays, it's purely in the Node.js ecosystem.  Installation is simple:

```bash
git clone git@github.com:esmevane/sojourn
cd sojourn
npm install
```

Now you have Sojourn installed.  Of course, it is using our project history, so no one would blame you if you just did this:

```bash
rm -rf .git
```

You don't need it.

## Dev mode (live coding)

To get going just run this command:

```bash
npm run dev
```

This fires up the dev server, running by default on `localhost:9001`.  Styling boilerplate is already there.  Any changes you make to the code in the `assets` folder will persist while the dev server is running, and compile to `app/assets`.

It also fires up the hot-loading server, which mostly just serves assets.  This other server is located at `localhost:9002`.

## Production builds

Want to get your app ready for prime time?  Just do this:

```bash
npm run build
```

This outputs `app/assets/application.min.js`, with all your scripts.  You have the power now - either copy the file to another application or make some sort of build system to move the file automatically.

> You can add entrypoints to `webpack.config.js` and `webpack.config.prod.js` to add other scripts to a bundle, or create new bundles.

## Test suite

Want to run the test suite?  That's easy:

```bash
npm test
```

This is a one-time test runner.  It returns the output of every `.es6` file it finds in `spec`, which uses the mocha syntax.

## TDD Mode

Want to keep the test suite running in the background, and rerun the suite every time you update it?  That's easy, too:

```bash
npm run tdd
```

This is a perpetual test runner.  It returns the output of every `.es6` file it finds in `spec`, which uses the mocha syntax, **but keeps the process alive and reruns it every time it detects a filesystem event in `spec`**.

This means you can fire it up, throw it in the background and every change you make will rerun the tests.  In other words, your tests are part of your live coding process as well.

As an added bonus, for systems which have growl or a notification center, a lot of default configurations will work with Sojourn's TDD mode.
