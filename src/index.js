const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');
mapboxgl.accessToken = "pk.eyJ1IjoiZGhhcmFybmFpayIsImEiOiJjamQxdXVkanUyMWRmMnFxbzJpeHd6a3Q3In0.uieIWKAd0exxCAQ8PmxAEw";

// const map = new mapboxgl.Map({
//     container: "map",
//     center: [-74.009, 40.705], 
//     zoom: 12, // starting zoom
//     style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
//   });
  

const marker = buildMarker('hotels', [-74.009, 40.705]);

// marker.addTo(map);
