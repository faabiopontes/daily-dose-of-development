# Hooks Simple

## What The Hook?

Hooks are used to add State and a kind of lifecycle methods to Function-Base Components
Since logic is isolated, it's easy to share logic between components

## Types of Hooks

| Name       | Goal                                                      |
| ---------- | --------------------------------------------------------- |
| useState   | Allow a functional component to use component-level state |
| useEffect  | Allow a functional component to use `lifecycle methods`   |
| useContext | Allow a functional component to use the context system    |
| useRef     | Allow a functional component to use the ref system        |

## Example of useState

`const [ currentValue, setCurrentValue ] = useState(initialValue);`

- useState: Function from React to create a new state variable
- initialValue: Starting value for this piece of state, similar to when we initialized our state object
- currentValue: Contains the present value of this piece of state
- setCurrentValue: Function to call when we want to update our state (and rerender)

## Example of useEffect

```js
useEffect(() => {
  fetchResource(resource);
}, [resource]);
```

- When the `[resource]` changes, the arrow function containing `fetchResource` is called
- An effect must return a function or nothing.
- You can't return a Promise, it should be a IIFE (A function that's created around parenthesis and invoked right away)

### Does It Get Called?

- If the second parameter **is not defined**, the arrow function is called **nonstop**
- If the second parameter is defined as something that **doesn't change**, the arrow function is called **once**
- Objects are **always** considered to be different, so if this is the case it's called **nonstop** too
- And as you know, when the second parameter **changes**, the arrow function is called **once**

## JSON Placeholder - By Typicode

- Link: http://jsonplaceholder.typicode.com/
- Endpoint Posts: http://jsonplaceholder.typicode.com/posts
- Endpoint Todos: http://jsonplaceholder.typicode.com/todos

## ComponentDidUpdate VS ComponentDidMount

1. App component created, initializes state `resource` of `posts`
2. App renders `ResourceList`
3. `ResourceList.componentDidMount` called, fetches posts
4. Fetch completed, `setState` called, number of posts rendered
5. We click `todos` button, App updates its state, rerenders itself and `ResourceList`
6. `Resource` was already "mounted", so `componentDidMount` is not called a second time!
