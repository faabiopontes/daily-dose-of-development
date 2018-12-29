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

## Rules of Class Components
  - Must be a Javascript Class
  - Must extend (subclass)
  - Must define a 'render' method that returns some amount of JSX