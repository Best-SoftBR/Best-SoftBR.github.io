var map = L.map('mapid').setView([-6.887849, -38.543479], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2xpbnNtYW4yMSIsImEiOiJjazFnb3Vrb2cwZGgwM2dzMGxub3dlcTZuIn0.T_yu-pLJjGsXNgVQA1G9Jw'
}).addTo(map);

let markerIcon = L.icon({
    iconUrl: 'images/marker.png',

    iconSize:[35, 35],
});

L.marker([-6.887849, -38.543479], {customId:"56", icon: markerIcon}).addTo(map).on('click', RunFilial);
L.marker([-7.146604, -34.841089], {icon: markerIcon}).addTo(map).on('click', RunFilial);
L.marker([-6.765757, -38.228561], {icon: markerIcon}).addTo(map).on('click', RunFilial);
L.marker([-3.755840, -38.546759], {icon: markerIcon}).addTo(map).on('click', RunFilial);
