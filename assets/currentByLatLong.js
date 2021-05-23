// sample data, retrieved through http://api.openweathermap.org/data/2.5/weather?lat=3.1613499999999997&lon=101.747481&appid={API_KEY}
export default {
  coord: {
    lon: 101.7475,
    lat: 3.1613,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 305.2,
    feels_like: 308.89,
    temp_min: 302.97,
    temp_max: 305.99,
    pressure: 1010,
    humidity: 55,
    sea_level: 1010,
    grnd_level: 1005,
  },
  visibility: 10000,
  wind: {
    speed: 2.1,
    deg: 283,
    gust: 2.83,
  },
  clouds: {
    all: 71,
  },
  dt: 1621741351,
  sys: {
    type: 2,
    id: 131484,
    country: 'MY',
    sunrise: 1621724496,
    sunset: 1621768692,
  },
  timezone: 28800,
  id: 1735162,
  name: 'Setapak',
  cod: 200,
}
