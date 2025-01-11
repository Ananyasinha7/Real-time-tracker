# Real-time-tracker 
# Description
This is a real-time location tracking application built using Node.js, Express, Socket.io, and Leaflet.js. The app enables multiple users to share their geographic location in real-time, which is displayed on an interactive map. Each user’s location is represented by a unique marker, and markers update dynamically as users move.

# Features
Real-Time Location Sharing: Users can share their live geographic location with others.
Dynamic Marker Updates: Each user's marker updates on the map as their location changes.
Automatic Map Updates: The map view centers on the current user when they move.
User Disconnect Handling: When a user disconnects, their marker is removed from the map.

# Tech Stack
Backend:
Node.js
Express.js
Socket.io for real-time communication
Frontend:
EJS for templating
Leaflet.js for map rendering
HTML, CSS, and JavaScript
Map Data: OpenStreetMap tiles are used to display the interactive map.
