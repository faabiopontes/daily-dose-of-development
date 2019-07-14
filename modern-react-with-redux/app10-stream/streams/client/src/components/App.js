import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <a href='/pagetwo'>Navigate to Page Two</a>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      Page Two
      <a href='/'>Go back to Page One</a>
    </div>
  );
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
