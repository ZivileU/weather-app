import { MAPBOX_TOKEN } from "../tokens";

const getLocation = async (lng: number, lat: number) => {
  const url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lng}&latitude=${lat}&access_token=${MAPBOX_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
};

export default getLocation;
