import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Different Routes Types
// import { RouterTypes } from './components/RouterTypes';
// ReactDOM.render(<RouterTypes />, document.querySelector('#root'));

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
