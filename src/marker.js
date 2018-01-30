const mapbox = require('mapbox-gl');


const iconUrls = {
    hotels: 'http://i.imgur.com/D9574Cu.png',
    restaurants: 'http://i.imgur.com/cqR6pUI.png',
    activities: 'http://i.imgur.com/WbMOfMl.png'
}


function buildMarker (activity, coords){
    const map = new mapbox.Map({
        container: "map",
        center: [-74.009, 40.705], 
        zoom: 12, // starting zoom
        style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
      });

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = iconUrls[activity];

    console.log(`******* This is our icon URL: ${iconUrls[activity]}`);
    
    new mapbox.Marker(markerDomEl).setLngLat(coords).addTo(map);
    
}

module.exports = buildMarker;