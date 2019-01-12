# Pics App

## App Challenges
- Need to get a search from the user
- Need to use that search to make a request to an outside API and fetch data
- Need to take the fetched images and show them on the screen in a list

## App Timeline
1. Component renders itself one time with no list of images
2. onSearchSubmit method called
3. Request made to Unsplash
4. [ ... wait ... ]
5. Request complete
6. Set image data on state of App component
7. App component rerenders and shows images

## Basic Event Handlers
- onClick: If user clicks on something
- onChange: User changes text in an input
- onSubmit: User submits a form

## Event Flow
1. User types in input
2. Callback gets invoked
3. We call setState with the new value
4. Component rerenders
5. Input is told what its value is (coming from state)

## Understanding 'this' in Javascript
- In 95% of the cases, **this** is related to the object to left when invoking the function, not when the function is attributed to some variable or element as callback

## Ways to Solve Context Issues
- Binding the context to function on the constructor:
  - Code: this.functionName = this.functionName.bind(this)
- Transforming our function into a arrow function
  - From: onElementEvent(event) {  }
  - To: onElementEvent = (event) => {  }
- Arrow function invoking function:
  - From: {this.onElementEvent}
  - To: {e => this.onElementEvent()}

## Axios VS Fetch
- Axios:
  - 3rd party package
  - Plug-and-play
  - Less code to write
- Fetch:
  - Function built into modern browsers
  - Have some caveats and needs more work
  - More core to write