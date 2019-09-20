# React Hooks

## React Mission

- Make it easier to build great UI
- Simplify the hard stuff
- Performance
- Developer tooling

## New React features
1. Suspense
2. Time Slicing
3. Profiler

## React Suspense

- Pause any state update until the data is ready
- Add async data to any component without "plumbing"
- On a fast network, render after the whole tree is ready
- On a slow network, precisely contrl the loading states
- There's bot a high-level and a low-level API

## Time Slicing
- React doesn't block the the thread while rendering
- Feels synchronous if the device is fast
- Feels responsive if the device is slow
- Only the final rendered state is displayed
- Same declarative component model

## What Still Sucks?
- Reusing logic
  - Higher-order components
  - Render props
- Giant components
- Confusing classes
  - Hard for humans
  - Hard for machines
- Resuming the problems: React doesn't provide a **stateful primitive** simpler than a **class component**

## Proposal for Solution
- No breaking changes
- Proposed APIs are new
- We need your feedback

# React Hooks
- Let's Hook React features from functional components