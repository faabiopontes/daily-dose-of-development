# Node Study

- The code can be blocking or non-blocking
- Request should always be non-blocking so the app doesn't lock because of some request

| Type of Code | Threads? |
| :----------: | :-----------: |
| non-blocking | multi-thread |
| blocking | single-thread |

- NPM: Generic problems already have solution by some package that is used by thousands of users
- Node is non-blocking since the beginning, so NPM Packages following this principle as well

- Ope Debug Console: `Ctrl + Shift + Y`
- Running Node on VS Code:
1. With Debug: `F5`
2. Without Debug: `Ctrl + F5`
3. With VS Code Tasks:
    - Create Task
    - Create Keybinding Shortcut to ease execution

## Node.js Fundamentals (Note App)

Node has lots of built-in modules for things like:
- Requiring and using built-in modules like HTTP and NPM third-party modules
- Doing things that were not possible with JavaScript

## Call Stack & Event Loop

In node we have our Call Stack, that is our stack of calls to be made

If we use asynchronous calls, they go to the Node APIs, but the Call Stack continues on

When the timeout ends, the callback goes to Callback Queue

The Callback Queue is executed after the main() is ended and we have nothing on our Call Stack

That makes a setTimeout with 0 delay execute after all the lines, even though our timeout is 0