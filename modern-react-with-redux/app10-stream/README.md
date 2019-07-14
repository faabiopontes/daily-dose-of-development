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
- Create
- Read
- Update
- Destroy

## Authentication

- User is **not** logged in:
  - User can view a list of all streams/channels
  - User can view video for a single stream
- User **is** logged in:
  - User can create a new stream/channel
  - User can **edit** a stream/channel they have created
  - User can **delete** a stream/channel they have created
