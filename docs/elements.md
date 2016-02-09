# Elements

Elements are the style corollary to containers.  Where containers bind a component into the logical framework of an application, elements are specific organization to group React components which are focused on *styling* an application.

For example, if your app heavily leans on Bootstrap, you may want to create elements like `<DropdownToggle>`, or `<ContainerFluid>`.

As a general rule, an element should accept a `children` property, and provide some way to display it.  That way you can use the element components to compose your interface in a way which is styled to your personal idiosyncrasies.

## A note on React-centric styling.

React has an interesting approach with styles:  It allows you to execute element-specific stylings with Javascript itself.  This provides an opportunity to go fully programmatic with your style work, if you want to.

In the case that you do that, you will be more or less making up your own style approach, but we recommend that you try using a folder like `app/scripts/styles` to contain reusable chunks of your styles.  It could potentially make it possible for you to write a test suite around your styles as well.
