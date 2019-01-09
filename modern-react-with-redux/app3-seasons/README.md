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
- Can use **state**
- Easier to handle user input
- Understands lifecycle events
- Easier to do things when the app first starts

## App Seasons Timeline

- JS File loaded by browser
- App component gets created
- App components 'constructor' function gets called
- State object is created and assigned to the 'this.state' property
- We call geolocation service
- React calls the components render method
- App returns JSX, gets render to page as HTML
- [...]
- We get result of geolocation
- We update our state object with a call to 'this.setState'
- React sees that we updated the state of a component
- React calls our 'render' method a second time
- Render method returns some (updated) JSX

## Rules of Class Component

- Must be a Javascript Class
- Must extend, or be a subclass, of React.Component
- Must define a **render** method that returns some amount of JSX

## Rules of State

- Only usable with class components
- Technically can be used with functional components using the 'hooks' system
- You will confuse props with state
- 'State' is a JS object that contains data relevant to a component
- Since it's a object, it should be used with **this.state.attribute**
- Updating 'state' on a component causes the component to rerender
- State must be initialized when a component is created, it can be on the constructor method or just below the component creation with **state = { attr: value }**
- State can **only** be updated using the function **setState**
- The only time we directly assign the state is on the constructor method
- The function setState receives a object, and only updates the attributes we send on said object

## Rules of Constructor

- Is the first method called when the class is instantiated
- When we override the default React.Component constructor method we should always call **super(props)** as the first line of the method
- When we call 'super(props' we are calling the constructor method from the parent class (React.Component)
- Before the 'super(props)' the **this** context doesn't exist

## Component Lifecycle

1. constructor(): Good place to do one-time setup, initialization
2. render(): Is called after constructor and every time the component changes, before the componentDidUpdate method. Avoid doing anything besides returning JSX. Don't make API requests here
3. Content is now visible on screen
4. componentDidMount(): Is called after the initial rendering of the component. Good place to data loading. Although we could do it on the constructor method, the community recommends doing it here
5. Sit and wait for updates, usually when state changes
6. componentDidUpdate(): Is called after the component is rerendered. Good place to do more data-loading when state/props change. Like doing requests every time a component is updated.
7. Sit and wait until this component is not longer shown
8. componentWIllUnmount(): Is called before the component will not be shown anymore on the screen. Good place to do cleanup (especially for non-React stuff)
9. There are other lifecycle methods, but they are rarely used. And should only be used when the methods at hand are not enough
