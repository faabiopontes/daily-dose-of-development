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

## The Purpose of Keys in Lists in React
- With the key prop on a element we help React to understand what items should be added or updated
- The key is supposed to go on every iterator or array, so it might not go on the direct element we are rendering

## Accesing the DOM with Refs
1. Let the ImageCard render itself and its image
2. Reach into the DOM and figure out the height of the image
3. Set the image height on state to get the component to rerender
4. When rerendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space

## React Refs
- Gives access to a single DOM element
- We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props