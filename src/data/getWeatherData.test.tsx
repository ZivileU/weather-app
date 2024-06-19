import getWeatherData from "./getWeatherData";

describe("getWeatherData", () => {
  it("should return weather data for the given coordinates and units", async () => {
    const lng = 123.456;
    const lat = 78.9;
    const units = "metric";

    const weatherData = await getWeatherData(lng, lat, units);
    expect(weatherData).toBeDefined();
  });
});
