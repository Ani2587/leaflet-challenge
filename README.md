# leaflet-challenge

## Overview
The United States Geological Survey[USGS], provides scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change.
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data, in order to better educate the public and other government organizations on issues facing our planet.

## Purpose

For this challenge, I am utilizing Leaflet to generate a map that displays the locations of all the earthquakes based on the retrieved data. Additionally, I am implementing markers, popups, and a legend to enhance the description and visualization of the earthquake data.
Given the choice to select an API from the "USGS GeoJSON Feed," I opted for the URL that retrieves JSON data for All earthquakes that occurred in the past day.

![image](https://github.com/Ani2587/leaflet-challenge/assets/17106097/672e286f-763c-4ca6-8c9c-783fd0e174c3)
![Alt text]([relative/path/to/image.png](https://github.com/Ani2587/leaflet-challenge/assets/17106097/672e286f-763c-4ca6-8c9c-783fd0e174c3))




## Instructions

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
