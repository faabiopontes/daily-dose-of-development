// Import the React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => <div>Hi there!</div>;
// the above line is converted to the line below using the Babel preset react
// they are essentially the same thing
// const App = () => React.createElement("div", null, "Hi there!");

// Take the React Component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById('root')
);