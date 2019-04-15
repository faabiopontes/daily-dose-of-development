# Stream App

## App Outline
- Streamer's Computer: Using a Open Broadcaster Software (OBS)
- Streamer's Computer: With a Video Stream + Stream Key configured
- Streamer's Computer: Pass the info through a Real Time Messaging Protocol (RTMP) Server
- Viewer's Browser: Request to RTMP Server to get video feed
- RTMP Server: Shares the video feed with Viewer's browser
- RTMP Server: Connects to the Web Server that knows which streams are currently broadcasting
- Web Server: Sends stream to Viewer's Browser