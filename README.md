# leaflet-challenge

In this challenge, I am focusing solely on part one since the second part was optional. Given the choice to select an API from the "USGS GeoJSON Feed," I opted for the URL that retrieves JSON data for all earthquakes that occurred in the past 7 days.

For this challenge, I am utilizing Leaflet to generate a map that displays the locations of all the earthquakes based on the retrieved data. Additionally, I am implementing markers, popups, and a legend to enhance the description and visualization of the earthquake data.


Follow the steps below to successfully run the code on your end:

Clone the "leaflet-challenge" repository to your local machine.
Open the "static/js/logic.js" file. Click on "Go Live." This action should open and navigate you to the web page.

I also updated the "css/style.css" file with the following code to display the legend:

.legend {
  padding: 10px;
  line-height: 18px;
  color: #555;
  background-color: #fff;
  border-radius: 5px;
}
.legend i {
  float: left;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  opacity: 0.7;
}
