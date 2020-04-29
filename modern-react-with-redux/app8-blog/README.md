# Blog App

This is app intended to consolidate or learning related to React and Redux, while developing a Blog with Posts and Authors using the http://jsonplaceholder.typicode.com API

## Basic Packages

- redux: The Redux library
- react-redux: Integration layer between React and Redux
- axios: Helps us make network requests
- redux-thunk: Middleware to help us make requests in a Redux application

## General Data Loading with Redux

1. Component gets rendered onto the screen
2. Component `componentDidMount` lifecycle method gets called
3. We call action creator from `componentDidMount`
   Components are generally responsbile for fetching data they need by calling an action creator

4. Action creator runs code to make an API request
5. API responds with data
6. Action creator returns an `action` with the fetched data on the `payload`
   Action creators are responsbile for making API requests
   **This is where Redux-Thunk comes into play**

7. Some reducer sees the action, returns the data off the `payload`
8. Because we generated some new state object, redux/react-redux cause our React app to be rerendered
   We get fetched data into a component by generating new state in our redux store, then getting that into our component through **mapStateToProps**

## What's wrong with 'fetchPosts'?

1. Action creators must return plain JS objects with a type property. With `async`, `await`, what we write is not actually what runs on the browser.
2. By the time our action gets to a reducer, we won't have fetched our data. Because requests run asynchronious to the flow of our code.

## Types of action creator

- Syncronous: Instantly returns an action with data ready to go
- Asynchronous: Takes some amount of time for it to get its data ready to go

## Middlewares in Redux

Function that gets called with every action we dispatch
Has the ability to **STOP, MODIFY,** or otherwise mess around with actions
Tons of open source middleware exist
Most popullar use of middleware is for dealing with async actions
We are going to use a middleware called `Redux-Thunk` to solve our async issues
