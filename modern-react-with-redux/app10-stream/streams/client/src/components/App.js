import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>Page One</div>;
};
const PageTwo = () => {
  return <div>
    Page Two
    <a href="/">
      <button>Go back to Page One</button>
    </a>
  </div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={PageOne} />
        <Route path='/pagetwo' component={PageTwo} />
      </BrowserRouter>
    </div>
  );
  // return <div>App</div>;
};

export default App;
