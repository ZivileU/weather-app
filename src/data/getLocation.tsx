const getLocation = async (lng: number, lat: number) => {
  const access_token =
    "pk.eyJ1Ijoieml2aWxldSIsImEiOiJjbHhnYmxzeG0wejIwMnFxejZ3NmNkZmZ1In0.XE4UFhZ5ta02OjScjLZTSQ";
  const url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lng}&latitude=${lat}&access_token=${access_token}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
};

export default getLocation;
