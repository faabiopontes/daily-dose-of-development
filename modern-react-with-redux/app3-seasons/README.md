# Seasons App

Learning about Class-Bases Components while we develop a app that gets the user location and their current month and display info related to the current season

## App Challenges

- Need to get users physical location
- Need to determine the current month
- Need to change text and styling based on location + month

## Functional Components

- Good for simple content

## Class-Bases Components

- Good for just about everything else
- Easier code organization
- Can use 'state' (another React system)
- Understands lifecycle events
- Easier to handle user input
- Easier to do things when the app first starts

## Geolocation Timeline

- JS File loaded by browser
- App component gets created
- We call geolocation service
- App returns JSX, gets render to page as HTML
- [...]
- After some time we get the results of Geolocation, since the service is asynchronous
- Tell the component to rerender itself with this new information

## Rules of Class Component

- Must be a Javascript Class
- Must extend (subclass)
- Must define a 'render' method that returns some amount of JSX

## Rules of State

- Only usable with class components
- Technically can be used with functional components using the 'hooks' system
- You will confuse props with state
- 'State' is a JS object that contains data relevant to a component
- Updating 'state' on a component causes the component to rerender
- State must be initialized when a component is created
- State can **only** be updated using the function 'setState'
- setState only updates the attributes we send on the object calling the function

## Rules of Constructor

- Is the first method called when the class is instantiated
- When we override the default React.Component constructor method we should always call 'super(props);' as the first line of the method
- When we call 'super(props' we are calling the constructor method from the parent class (React.Component)
- Before the 'super(props)' the 'this' context doesn't exist
