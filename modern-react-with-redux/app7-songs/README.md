# React Redux Songs App

This Songs app is intended to merge our knowledges about React and Redux into a single app

## Reminders
- To change the Redux Store the first step is the call to the Action Creator
- If our export is named we need the curly braces, otherwise we don't
- After we bind the Redux state with mapStateToProps it will be available as a property (this.props) of the component
- The action can be called outside of our this.props.action() but it will be treated as a regular JS function that returns a object
- Redux is Not Magic

## Redux
- To bind Redux correctly into our components we need to create two components, Provider and Connect
- The Connect ask the Provider to tell it about changes
- The Provider then sends the Store when it changes
- The Connect then binds the necessary info from the Store into our component

## Redux Project Structure
- src/
  - actions/: Files related to action creators
  - components/: Files related to our components
  - reducers/: Files related to reducers
  - index.js: Sets up both React and Redux sides of the app