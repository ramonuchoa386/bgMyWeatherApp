import WeatherApiConfig from '../config/weather-api-config';

export async function getCurrentWeatherData(lat, long) {
  const url = `${
    WeatherApiConfig.baseUrl + WeatherApiConfig.currentWeather
  }?key=${WeatherApiConfig.apiKey}&q=${lat},${long}`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    return {
      temp: json.current.temp_c,
      query: encodeURI(json.current.condition.text).toLowerCase(),
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getForecastData(lat, long) {
  const url = `${WeatherApiConfig.baseUrl + WeatherApiConfig.forecast}?key=${
    WeatherApiConfig.apiKey
  }&q=${lat},${long}&days=7`;

  let forecast = [];

  try {
    const response = await fetch(url);
    const json = await response.json();

    json.forecast.forecastday.forEach(element => {
      forecast.push({
        day: element.date,
        max: element.day.maxtemp_c,
        min: element.day.mintemp_c,
      });
    });
  } catch (error) {
    console.error(error);
  } finally {
    return forecast;
  }
}
