# Streams Client

## Flows

### Redux Auth

#### Redux Store

- Keeps the Auth State

... that are changed by

#### Reducers

- SIGN_IN
- SIGN_OUT

... that are called by

#### Actions

- signIn()
- signOut()

... that are called as connected props on **onAuthChange** at

#### GoogleAuth Component

- onSignInClick(): Sign In User with GAPI Auth2
- onSignOutClick(): Sign Out User with GAPI Auth2
- onAuthChange(): Receives change from GAPI Auth2...

... and communicates with **Redux Store** to get updated Auth State

## Redux Dev Tools
- We can use debug sessions to kind of save how the store was at some point using the GET parameter `debug_session=**<string of the session>**`
- Example: `http://localhost:3000/?debug_session=fsp`

## Redux Forms
- This package has great documentation with lots of use case scenarios like the [Wizard Form](https://redux-form.com/8.2.2/examples/wizard/)