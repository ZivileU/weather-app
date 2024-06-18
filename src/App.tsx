import React, { useEffect, useRef, useState, useMemo } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import getWeatherData from "./data/getWeatherData";
import getLocation from "./data/getLocation";
import mapWeatherData from "./utilities/mapWeatherData";
import { WeatherData } from "./types/WeatherData";
import "./App.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoieml2aWxldSIsImEiOiJjbHhnYmxzeG0wejIwMnFxejZ3NmNkZmZ1In0.XE4UFhZ5ta02OjScjLZTSQ";

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();
  const [lng, setLng] = useState(12.14);
  const [lat, setLat] = useState(55.41);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });

    map.current.on("click", (e) => {
      const createPopup = async () => {
        const data = await getWeatherData(e.lngLat?.lng, e.lngLat?.lat);
        const location = await getLocation(e.lngLat?.lng, e.lngLat?.lat);
        console.log(data);

        if (data && location && map.current) {
          const weatherData: WeatherData = mapWeatherData(data);
          const address = location.features[0].properties.full_address;

          new mapboxgl.Popup()
            .setLngLat([e.lngLat.lng, e.lngLat.lat])
            .setHTML(
              `<h3>${address}</h3><h4>Weather:</h4><p>${weatherData.description}</p><img src="https://openweathermap.org/img/wn/${weatherData.icon}@2x.png"/><br /><h4>Tempature:</h4><p>${weatherData.temperature}</p><br /><h4>Feels like:</h4><p>${weatherData.feelsLike}</p><br /><h4>Humidity:</h4><p>${weatherData.humidity}</p><br /><h4>Pressure:</h4><p>${weatherData.pressure}</p><br /><h4>Wind direction:</h4><p>${weatherData.wind.deg}</p><h4>speed:</h4><p>${weatherData.wind.speed}</p><br /><h4>Sunrise:</h4><p>${weatherData.sunrise}</p><br /><h4>Sunset:</h4><p>${weatherData.sunset}</p>`
            )
            .addTo(map.current);
        }
      };

      setLng(parseFloat(e.lngLat?.lng.toFixed(2)));
      setLat(parseFloat(e.lngLat?.lat.toFixed(2)));

      createPopup();
    });

    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
  }, []);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapComponent;
