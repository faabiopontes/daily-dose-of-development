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

## Context Provider or Consumer

- In the `Provider` we are **setting** the value for a specific context, like our `LanguageContext`
- In the `Consumer` we are **getting** the value for the context

## Redux or Context?

| **WINNER** - Redux                         | Context                                                       |
| ------------------------------------------ | ------------------------------------------------------------- |
| Distributes data to various components     | Distributes data to various components                        |
| Centralizes data in a store                |                                                               |
| Provides mechanism to change data in store |                                                               |
| ---                                        | ---                                                           |
| Excellent documentation                    | No need for an extra lib                                      |
| Well-known design patterns                 | Hard to build a 'store' component with cross cutting concerns |
| Tremendous amount of open source libs      |                                                               |

## And what if I want to use Context in place of Redux

- We need to be able to get data to any component in our hierarchy
- We need to be able to separate our view logic from business logic
- We need to be able to split up business logic (not have a single file with 10000 lines of code)
