import { WEATHER_API_KEY } from "../tokens";

const getWeatherData = async (lat: number, lng: number, units: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${units}&appid=${WEATHER_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export default getWeatherData;
