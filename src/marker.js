const mapbox = require('mapbox-gl');


const iconUrls = {
    hotels: 'url(http://i.imgur.com/D9574Cu.png)',
    restaurants: 'url(http://i.imgur.com/cqR6pUI.png)',
    activities: 'url(http://i.imgur.com/WbMOfMl.png)'
}


const buildMarker = function (activity, coords){
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage =  iconUrls[activity];

    console.log(`******* This is our icon URL: ${iconUrls}`);
      return new mapbox.Marker(markerDomEl).setLngLat(coords);
}

module.exports = buildMarker;