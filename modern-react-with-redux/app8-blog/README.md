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
