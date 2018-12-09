# RocketSeat ReactJS Starter Course
## 1. What is React?
- React is a library that does everything JavaScript can do, but in a organized way
- Is basically a library to manipulate the DOM
- Used for building SPAs
- The back-end of the app can be totally separated from the front-end, the React library would then only access the API endpoints
- HTML code inside JavaScript


### Component-Based
- Encapsulated components that manage their our state
- Build complex UIs using composed components
- Logic of components if written in JavaScript instead of templates
- Data can be passed through the app keeping state out of DOM


### Declarative
- React makes painlesss to create interactive UIs
- React is efficient and updates and renders just the right components when our data changes
- Declarative views make code more predictable and easier to debug


### Learn Once and Write Anywhere
- React can be used isolated from the rest of the app
- Without any changes necessary
- React can also render on the server using Node
- React can power mobile apps using React Native

## 2. Creating Project
- The global package create-react-app does all the work for us
- node_modules folder contains all packabes used by our application
- public folder contains all the files available to the user
- src folder contains all the code of the app
- .gitignore basic files to be ignored
- package.json very important because it's where our dependencies and basic execution scripts are

### Dependency Packages
- Our basic React development packages are:
- react
- react-dom
- react-scripts: Somehow related to create-react-app, does some Babel work

## 3. What are Components?
- index.js: Is the first file executed by the React app
- import React from 'react': Is necessary to use JSX (App />) into component
- ReactDOM.render: Is called only once through our app, serves to render our first component. Render
- <div id="root"></div>: Is on our index.html and serves as a root component for our VDOM tree
- class App extends Component: Our class becomes a component when extending Component from "react". This makes us able to do call <App /> as if our class is a HTML tag
- What is a component? A isolated mix of structure (HTML), functionality (JS, events), and styling (CSS)
- Using a basic HTML page as example, our Header, Body, and Footer would all be components
- The render() method is mandatory to all Components. It returns a JSX content
- On JSX we use className instead of class, because class is a JS reserved word

## 4. Creating Header
- const Header = () => (): When we do like this we are using the concept 'stateless components'.
- We use 'stateless components' when we only have a render function inside our component
- Every HTML, CSS, JS related to our component goes inside each component folder
- He apply some styles in a styles.css file inside our src folder to kind of "reset" each browser CSS