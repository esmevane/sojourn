# Actions & Action Creators

Actions and action creators, thanks to Redux, are just about the simplest part of any Sojourn project.

## Actions:

```javascript
export const AnActionName = "an:action:string"
```

That's all.

Actions are, basically, constants which hold strings - that's all they are.  They're there to provide you, and the next developer, a single point of reference and change, which wraps a primitive in a code snippet.

Why wrap a perfectly harmless string in a constant?  Two really good (and inexpensive to make) architectural bits of advice spring to mind.

> Never use a primitive when an object can be used.

> Always prefer code barewords over internally bootstrapped state.

By inexpensive, we mean that the benefits far outweigh the ceremony of the architectural choice.

Just in case the benefits of doing this are kind of non-obvious, here they are in plain language:

* When you have a primitive in several places, any change needs to be made in all of those places.
* When you have a bareword in a file, you have to explicitly import that bareword from that file.
* Any imported bareword now has an _obvious, explicit link to a single point of truth in your application_.
* This makes it sickeningly simple for the next guy to intuit what you're trying to do in almost any given case.

To recap, doing this:

```javascript
import { AnActionName } from '../actions'
```

Tells the next developer where your actions are, where changes should go, and what the action is.  All for a simple one-liner elsewhere in your application.

## Action creators

Action creators are a little more complicated than actions, but not by much.  Here's an example action creator:

```javascript
export function anActionName() {
  let type = AnActionName
  return { type }
}
```

That's it.  That's actually all an action creator ever should be - a simple process of getting the appropriate type, and returning it in an object which looks like this:

```json
{ "type": "an:action:name" }
```

Some action creators ought to pass along bits of data.  Let's say you want to pass an object ID or something.  Just include it as an arbitrary extra key on the returned object.  As long as there's a `type` key, all's well.

Here's an example:

```javascript
export const AnActionNameWithId = "an:action:name:with:id"
export function anActionNameWithId(id) {
  let type = AnActionNameWithId
  return { type, id }
}
```

Again:  that's it!

Something so simple inevitably raises a lot of questions.

#### Why are the two types separate?

That's so that you can listen to type in your reducers.  More on those later.

#### Why does the string look like that?

Honestly?  Just personal preference.  Make them whatever you want so long as there's a single point of truth for the string.  The strings are almost never parsed.
