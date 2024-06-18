export interface WeatherData {
  name: string;
  description: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  clouds: number;
  rain: number | undefined;
  pressure: number;
  wind: {
    speed: number;
    deg: number;
  };
  sunset: number;
  sunrise: number;
}
