# The Script Pipeline: Stores

Stores are state management objects.  They're designed to be event emitters, so that views can listen to them.  They're also designed to be dispatch recipients, so that they can know when to update or sync the data they represent.

Think of stores as though they were a coupling of event bindings to your data - because that's exactly what they're supposed to do.  They store, and emit event changes, on specific portions of your domain data.

The idea here is that your interface has a very interface-specific idea of what your data looks like.  It isn't immediately possible to just make blanket statements about how you should abstract everything into some sort of Railsy resource pattern (though you could, if you wanted to).

You might have "ThreadStores" that have nothing to do with any resource that represents the thread, for example.

A store is essentially the device which tracks the running memory of an application.  If you were to, for example, track your state in local storage, then your store would need to be able to call this information back to life whenever the application boots.

A store should initialize itself and export an instance of itself, for the sake of consistency across your software.  This lets other pieces of your code use the current, live state of the store whether it's just in a transient memory object or somewhere else (say, local storage or indexed dbs).

You should suffix "store" on every store object and file name.

Stores are a way to contain data and connect it to an event pipeline.  At the core of the store philosophy is the idea that there is no need to emit a conventional series of events for every possible data change.

So, other frameworks might say every time you change a nugget of data, they should broadcast a corresponding event, built by convention.

In other words, when this happens, under the hood:

```javascript
nugget = { of: "data" }
nugget.of = "new data"
```

Other frameworks will do something like this:

```javascript
nugget.emit("nuggets:change:of", "new data")
```

And that emit is usually sent out globally, with no real locality to components.

Basically that means the object in question has changed, and a message is sent along built out of a convention that says the best event message channel is `object:event:field`.

The problems with this approach are as follows:

1. The conventions are outside of your control.  You must obey the framework conventions and are not really encouraged to write your own.  So, what if your application has special cases?  Well, you might be encouraged to piggyback information onto objects and just patch around persistence consequences by taking that information back out at the last minute, or so on.  So it winds up messy.
2. You are encouraged to hardwire pieces of your application to these events.  In other words, your baked in knowledge of what's going on under the hood of your software is going to scatter across all your software.
3. Your objects become the source of truth about themselves, meaning the data is implicitly (instead of explicitly) coupled to anything which needs to know about its lifecycle.  This can get bad, fast, for garbage collection or anything which observes object references.

Stores counteract these flaws by becoming a device which curates a region of the data, and then offers itself interface which can emit data and offer callback hooks only when and how you tell it to.
