 const socket = io();
 if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
       const {latitude,longitude}= position.coords;
       socket.emit("send-location",{latitude,longitude});
    }, (error)=>{
        console.error(error);
    },
    {enableHighAccuracy:true,
      timeout:5000,
    maximumAge:0,
    }
);
 } 

 const map=L.map("map").setView([0,0],16);
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"OpenStreetMap"
 }).addTo(map);

 const markers={};
 socket.on("receive-location",(data)=>{
    const {id, latitude, longitude}=data;
    console.log("Location received:", data);
    if(id==socket.id){map.setView([latitude,longitude]);}
    if(markers[id]){
        markers[id].setLatLng([latitude,longitude]);
        console.log(`Updated marker for ${id}`);
    }
    else{
        markers[id]=L.marker([latitude,longitude]).addTo(map);
        console.log(`Added new marker for ${id}`);
    }
    console.log("Current markers:", markers);
 });

 socket.on("user-disconnected",(id)=>{
    console.log("User disconnected:", id);
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
        console.log(`Removed marker for ${id}`);
    }
 });