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