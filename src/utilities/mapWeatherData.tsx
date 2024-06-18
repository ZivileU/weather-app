const mapWeatherData = (data: any) => {
  return {
    name: data.name,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind: data.wind,
    sunset: data.sys.sunset,
    sunrise: data.sys.sunrise,
  };
};

export default mapWeatherData;
