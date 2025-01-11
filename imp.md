# 1.  User Connects:
when the user opens the application, a unique socket connection is established using Socket.io

# 2. Location Sharing:
* if geolocation is enabled , the app continuously tracks the user's location using the browser's navigator.geolocation API
* the location data  (latitude, longitude) is emitted to the server

# 3. Location Broadcast:
* Server receives location data and broadcasts it to all client servers
* Other clients render the user's location as a marker on the map.

# 4. User Disconnects:
* When a user disconnects, the server notifies other clients and the respective marker is removed from the map.