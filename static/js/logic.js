// Store API endpoint (for All Earthquakes from the Past 7 Days) as url.
url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

//create a map object centered aroun the coordinates [33.5008333, -116.5043333]

let myMap = L.map("map", {
  center: [33.5008333, -116.5043333],
  zoom: 5
});

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define a function to choose a color based on depth
function chooseColor(depth){
  return depth > 90 ? '#e6550d' :
        depth > 70  ? '#fdae6b' :
        depth > 50  ? '#feb24c' :
        depth > 30  ? '#fec44f' :
        depth > 10   ? '#f7fcb9' :
                 '#addd8e';
}
// Perform a GET request to the query URL.
d3.json(url).then(function(data){
  //console.log(data.features);

  //Loop through the earthquake data and create marker
  data.features.forEach(function(feature) {
    var coordinates = feature.geometry.coordinates; 
    var magnitude = feature.properties.mag;
    var location = feature.properties.place;
    var depth = coordinates[2];
    //console.log(magnitude);
  
    //Create marker for each earthquake
    var marker = L.circleMarker([coordinates[1],coordinates[0]],{
      radius: (magnitude*5),
      fillColor: chooseColor(depth),
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }).bindPopup(`<h3>Location : ${location} Magnitude: ${magnitude} <p> Depth: ${depth} </p> <\h3>`).addTo(myMap);
  });

  //Create a Legend
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
    depths = [-10, 10, 30, 50, 70, 90],
    colors = ['#addd8e', '#f7fcb9','#fec44f', '#feb24c','#fdae6b', '#e6550d'],
    labels = [];

    for (var i = 0; i < depths.length; i++) {
      div.innerHTML +=
      "<i style='background:" + colors[i] + "'></i>" +
      depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
      console.log(colors[i]);
      }
      return div;
  };

  
  legend.addTo(myMap);
});





