// Import the React and the ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// const getButtonText = () => 'Click on me!';

// Create a React Component
const App = () => {
  const buttonText = { text: 'Click me' };
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  )
};
// the above line is converted to the line below using the Babel preset react
// they are essentially the same thing
// const App = () => React.createElement("div", null, "Hi there!");

// Take the React Component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById('root')
);