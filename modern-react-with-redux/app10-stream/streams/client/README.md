# Streams Client

## Flows

### Redux Auth

#### Redux Store

- Keeps the Auth State

... that are changed by

#### Action Creators

- signIn()
- signOut()

... that are called by **onAuthChange** at

#### GoogleAuth Component

- onSignInClick(): Sign In User with GAPI Auth2
- onSignOutClick(): Sign Out User with GAPI Auth2
- onAuthChange(): Receives change from GAPI Auth2...

... and communicates with **Redux Store** to get updated Auth State
