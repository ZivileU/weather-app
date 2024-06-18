export interface WeatherData {
  name: string;
  description: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  wind: {
    speed: number;
    deg: number;
  };
  sunset: number;
  sunrise: number;
}
