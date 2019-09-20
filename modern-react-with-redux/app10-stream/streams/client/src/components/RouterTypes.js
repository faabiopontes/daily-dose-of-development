import React from 'react';
import {
  HashRouter,
  MemoryRouter,
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to='/pagetwo'>Navigate to Page Two</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      Page Two
      <Link to='/'>Go back to Page One</Link>
    </div>
  );
};

const AppWithBrowserRouter = () => {
  return (
    <div>
      <h3>BrowserRouter</h3>
      <BrowserRouter>
        <Route path='/' exact component={PageOne} />
        <Route path='/pagetwo' component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

const AppWithMemoryRouter = () => {
  return (
    <div>
      <h3>MemoryRouter</h3>
      <MemoryRouter>
        <Route path='/' exact component={PageOne} />
        <Route path='/pagetwo' component={PageTwo} />
      </MemoryRouter>
    </div>
  );
};

const AppWithHashRouter = () => {
  return (
    <div>
      <h3>HashRouter</h3>
      <HashRouter>
        <Route path='/' exact component={PageOne} />
        <Route path='/pagetwo' component={PageTwo} />
      </HashRouter>
    </div>
  );
};

const RouterTypes = () => {
  return (
    <div>
      <h1>RouterTypes</h1>
      <BrowserRouter>
        <Link to='/'>Go to BrowserRouter</Link>
        <Link to='/hashRouter'>Go to HashRouter</Link>
        <Link to='/memoryRouter'>Go to MemoryRouter</Link>
        <Route path='/' exact component={AppWithBrowserRouter} />
        <Route path='/hashRouter' component={AppWithHashRouter} />
        <Route path='/memoryRouter' component={AppWithMemoryRouter} />
      </BrowserRouter>
    </div>
  );
};

export {
  RouterTypes,
  AppWithBrowserRouter,
  AppWithMemoryRouter,
  AppWithHashRouter,
};
