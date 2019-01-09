# Pics App

## App Challenges
- Need to get a search from the user
- Need to use that search to make a request to an outside API and fetch data
- Need to take the fetched images and show them on the screen in a list

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