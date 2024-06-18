const getWeatherData = async (lng: number, lat: number) => {
  const apiKey = "7dcf756be94ada9f7e48721421460103";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export default getWeatherData;
