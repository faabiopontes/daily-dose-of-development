# Library App

Learning Node.js and Express while developing a Library app

## Links

- ESLint: Standard for Javascript linting: https://eslint.org/
- Node.js ES2015 Support and Features: https://node.green/

## Section 3 - First Page

- Set up Express
- Running Express
- Logging
- Serving HTML
- Serving static files
  - Bootstrap
  - jQuery

## Section 4 - Setting up Tooling

- NPM start: Initially we had different scripts for Linux and Windows
- ESLint: Enforcing the AirBnB style guide for JS automatically with VS Code
- ES6 and beyond: ESLint helps us with mistakes and things we should do differently
- Nodemon: Runs our JS file like a task but restarts automatically when things change
- Environmental variables: We can use a nodemonConfig.env object inside our package.json to store environment variables

## Section 5 - Templating

- Building a Web Application
- Templating Engines
- Using Pug
- Using EJS
- Our First Real Page

### Pug
  - Simplifies our HTML by removing closing tags and using indentation of code
  - Can receive a object of properties from the render()
  - We can loop over a list on a pug file

## Section 6 - Routing
- Build Routes for Our Application (our app now has routes for a list of and each book)
- Separating Files (our routes from books are in a different file now)
- Parameter Variables (a different route id for every book)
- Router Fuctions (Higher-order functions)

## Section 7 - Databases
- Getting Data from SQL Server
- Using MongoDB
- Mongo Command Line
- Inserting Data
- Find and Find One

### SQL Server on Azure
- We created our pslibrary database at Azure
- We should disable it after the course so we don't get charged a lot

### Node Require Caching
- When we require('mssql') over different files, Node uses the same instance, that's why we don't need to instantiate with the config in the bookRoutes file