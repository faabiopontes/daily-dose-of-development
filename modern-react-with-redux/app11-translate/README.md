# Translate App

App with internationalization and Context

## Context Object

- There are two ways to get information **in** and **out** of our `Context Object`

Ways into the source of data:

- Default value
- `Provider` from Parent Component

Ways out of using the data

- `this.context`
- `Consumer`

## Context Flow

1. Application loads up in the browser
2. We create a context object with a default value of `english`
3. `App` component gets rendered, creates a Provider that wraps `UserCreate`
4. `Provider updates the value of the context object to`ths.state.language`
5. `Button` and `Field` reach into context object, see the value from `this.state.language`
6. `Button` and `Field` render appropriate text to the screen
