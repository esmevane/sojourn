# The Style Pipeline

First of all, you don't need to include sass files in your html anymore.  Webpack handles that for you.

Basically, just head to `app/assets/scripts/App.es6`.  You should see a bunch of application setup code.  At the top, you'll see this line:

```javascript
require("application.sass")
```

Webpack handles assets differently than other build systems.  It creates an environment where anything can be composed using CommonJS `require` statements.

The caveat is that the `webpack.config.js` / `webpack.config.prod.js` files need to be updated in order to recognize the file types that they're loading.

In other words, to get to styling, you only need to load the live code environment:

```bash
npm run dev
```

Any style changes you make will be chunked and sent to the browser live.

## The workflow

The process is dead simple:

1. Put an HTML file into `app/` - there are no layouts here (yet - they're welcomed if anyone wants to add them), so you'll either have to build the page entirely or settle for building partials.
2. This HTML file is now accessible at `localhost:9001/<filename without html suffix>`; so, if you created `app/jabberwocky.html`, it'd be accessible at `localhost:9001/jabberwocky`
3. You'll need to actually include the `assets/application.js` file in the HTML.
4. From there, just style your work using the `assets/styles` directory contents.  Webpack knows to look in there as one of its load paths.
