How does the idea of an animatable entity fit into the functional workflow
of redux?

In redux, you have actions, action creators, and reducers.  An action
represents a type of event in an application.  An action creator gives an
easy way for an action to be paired with data and dispatched to reducers.
Reducers represent a point of behavior on a state tree.

In the below example of a scatter plot, there are three major events.

  * Entrance - the point when the animated body steps into the UI.
  * Update - called every time an animation loops.
  * Exit - the point when an animation is removed from the UI.

An animatable interface might look like this:

```javascript
class Animatable {
  appear() {}
  animate() {}
  leave() {}
}
```

Some thoughts on this:  Animatables might have some similarity to redux sagas
in the sense that quantifying them through tests might be better if these
interfaces were accessible through an action-creator-type interface.

In other words:

`{ type: "APPEAR", instructions }`

Now this almost feels like a frame / keyframe in an animation.  So duration
would come into play, as well as a body of transformations that the animation
should go through.  Maybe more like:

`{ type: "APPEAR", transformation, duration }`

And then there's the concept of D3, in specific, which couples animation with
data.  Sort of.  So we have these concepts being intertwined:

* Data to be viewed
* What we want to show
* How we want to animate it

Data ought to travel through actions and reducers.  That means that
animations might sit in the same spot as components.

This makes sense - Components ought to handle animations and distribute data
to those animatables in the form of props.  This puts animatables in the
vein of lifecycle pieces, but it leaves one major thing on the table.

`How do we animate D3 with a set of props?`
