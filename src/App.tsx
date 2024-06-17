import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoieml2aWxldSIsImEiOiJjbHhnYmxzeG0wejIwMnFxejZ3NmNkZmZ1In0.XE4UFhZ5ta02OjScjLZTSQ";

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
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
      setLng(parseFloat(e.lngLat?.lng.toFixed(4)));
      setLat(parseFloat(e.lnglat?.lat.toFixed(4)));

      if (map.current) {
        new mapboxgl.Popup()
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .setHTML(`<strong>Lattitude</strong><p>${e.lngLat.lat}</p>`)
          .addTo(map.current);
      }
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
      <div
        ref={mapContainer}
        style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
      />
    </div>
  );
};

export default MapComponent;
