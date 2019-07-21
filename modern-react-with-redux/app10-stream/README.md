# Stream App

## App Outline

- Streamer's Computer: Using a Open Broadcaster Software (OBS)
- Streamer's Computer: With a Video Stream + Stream Key configured
- Streamer's Computer: Pass the info through a Real Time Messaging Protocol (RTMP) Server
- Viewer's Browser: Request to RTMP Server to get video feed
- RTMP Server: Shares the video feed with Viewer's browser
- RTMP Server: Connects to the Web Server that knows which streams are currently broadcasting
- Web Server: Sends stream to Viewer's Browser

## App Challenges

- Need to be able to navigate around to separate pages in our app
- Need to allow a user to login/logout
- Need to handle forms in Redux
- Need to master CRUD operations in React/Redux
- Errors will likely occur! Need good error handling

### What the CRUD?

- **C**reate
- **R**ead
- **U**pdate
- **D**estroy

### React Family

- `react-router`: Core navigation lib - we don't install this manually
- `react-router-dom`: Navigation for dom-based apps (we want this!)
- `react-router-native`: Navigation for React Native apps
- `react-router-redux`: Bindings between Redux and React Router (not necessary)

## React Router

- `history` object: Keeps track of the address bar in your browser
- BrowserRouter: Listens to `history` object for changes to the URL
- Route
  - Makes the component visible only when the 'path' matches the current URL
  - Considering above statement, multiple `Route` components can be rendered on the same path
  - When we don't use the `exact` attribute it's like we ran `extractedPath.contains(path)`
- When we add attributes without value, like `<Route exact />`, it's the same as `<Route exact={true} />`

### Bad Navigation

- Using archors tags to change the page is **bad** because it makes our app restart completely

1. When you add an `<a/>` tag to your application with `href='/pagetwo'`and click it
2. The browser makes a request to the server
3. Server responds with `index.html` file
4. **Browser receives `index.html` file, dumps old HTML file it was showing (including all of your React/Redux state data!)**
5. `index.html` file lists our JS files in script tags - browser downloads and executes these scripts
6. Our app starts up (or kind of restarts if think about the whole process)

### Good Navigation

- User wants to navigate to another page in our app

1. Users clicks a `Link` tag
2. `React Router` prevents the browser from navigating to the new page and fetching new `index.html` file!
3. URL still changes
4. `history` object sees updated URL, takes URL and sends it to `BrowserRouter`
5. `BrowserRouter` communicates the URL to `Route` components
6. `Route` components rerender to show new set of components

### Different Types of Navigations

- It's all about deployment
- `BrowserRouter`
  - Uses everything after the domain or port as the `path`
  - Most complicated to
  - Example: localhost:3000**/pagetwo**
- `HashRouter`:
  - Uses everything after a **#** as the `path`
  - Example: localhost:30000**/#/pagetwo**
- `MemoryRouter`
  - Doesn't use the URL to track navigation.
  - Example: localhost:3000**/**

### Traditional Server Navigation

- Routes or files that exist are returned, and then 404 when doesn't exist

1. Do I, the Backend, have a router for `/pagetwo`?
2. Yes, I am supposed to generate some HTML and send it back
3. Respond with HTML document from backend

### Create-React-App Dev Server Navigation

- If everything fails it defaults to index.html file instead

1. Do I have anything special for `/pagetwo`?
2. Check dev resources (CSS, JS)
3. Check public dir (Images, Fonts, SVGs, ICOs, JSON)
4. Nope, ok, guess I'll serve up the `index.html` file

## Authentication

- User is **not** logged in:
  - User can view a list of all streams/channels
  - User can view video for a single stream
- User **is** logged in:
  - User can create a new stream/channel
  - User can **edit** a stream/channel they have created
  - User can **delete** a stream/channel they have created

### Email/Password Authentication

- We store a record in a database with the user's email and password
- When the user tries to login, we compare email/password with whats stored in DB
- A user is **logged in** when the yenter the correct email/password

### OAuth Authentication

- User authenticates with outisde service provider (Google, Linkedin, Facebook)
- User authorizes our app to access their information
- Outside provider tells us about the user
- We are trusting the outside provider to correctly handle identification of a user
- OAuth can be used for:

1. User identification in our app
2. Our app making actions on behalf of user

#### OAuth for Servers

- Results in a **token** that a server can use to make requests on behalf of the user
- Usually used when we have an app that needs to access user data **when they are not logged in**
- Difficult to setup because we need to store a lot of info about the user

#### OAuth for JS Browser Apps

- Results in a **token** that a browser can use to make requests on behalf of the user
- Usually used when we have an app that needs to access user data **while they are logged in**
- Very easy to set up thanks to Google's JS lib to automate flow

#### OAuth Browser Flow

1. User clicks **Login with Google** button
2. We use Google's JS lib to initiate OAuth process
3. Google's JS lib makes lib makes auth request to Google
4. Google display confirmation screen to user in popup window
5. User accepts
6. Popup window closes
7. Google's JS lib invokes a callback in our React/Redux app
8. Callback provided with **authorization token** and profile info for user
