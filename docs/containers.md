# Containers

Containers are an additional layer meant to go on top of Components, which take those generic lego bricks and connect them to the Redux state tree.

In other words, Containers take Components and add application logic to them via recomposition.

A hallmark of a Container file will be three functions:

* `connect`, which is imported from the React Redux library.
* `mapStateToProps`, which is a function designed to take the state tree and get the data the container wants to load.
* `mapDispatchToProps`, which is a function that designed to take the store dispatch function and turn it into actions for the container to execute.
