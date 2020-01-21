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
