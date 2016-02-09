# Components

Components are minimalist, presentation-centric React components.  They aren't wired to any functionality or connected to the store.  They only know that if they're given a certain bit of data, they present it in a certain way.

Generally, components should never contain logic except what they need to compose interfaces.  So, in other words, a Component shouldn't be an `Inbox`, it should be a `MessageList`.
