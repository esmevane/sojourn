# The Script Pipeline

The javascript pipeline is an expandable, multiple entry point build system with a hierarchy strongly influenced by the [Flux architecture](http://facebook.github.io/flux/), and [Redux](http://redux.js.org).

Flux architecture is incredible and simple to use, but with a lot of boilerplate to get running.  Redux on the other hand takes that to the next level, dropping a ton of boilerplate from the process and replacing it with unit-testable concepts and simple state trees.

Overall it's worth reading those resources at some point, but not necessary.  Sojourn bundles an example app to show you the two working in tandem, and it comes with a test suite describing them.

## Philosophy preaching

The basic goals here are to make a code base which is easy to find, test, and change.

The primary way we're going to try to meet these goals are by organizing the code into small, composable chunks.  These chunks should be written with reassembly in mind, so that they can be used to build up larger, application-level suites of scripts.

> "It's easier to work with code duplication than it is to work with a bad abstraction." - Sandi Metz

This sort of architecture encourages the idea of *replacing* chunks of code, instead of *augmenting* existing ones.

This means that if you encounter an object that does something you want it to do, but *not quite*, then you're encouraged to build a neighboring chunk of code that does what you want.  **Name it differently, and with a clear purpose.**  If you can't name your code then you may need to rethink why you need it.

It's important to say that the code and architecture here is just a real big work in progress at all times.  It's not a prescription for the best approach.  Better, quicker, easier ways to approach things should always be under exploration.

If you have a better idea, do it: just make sure it's tested, works, and doesn't break anything.  Be an innovative but considerate neighbor.
