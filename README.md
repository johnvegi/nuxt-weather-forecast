# Getting Started

This project is using Nuxt.js with [OpenWeather](https://openweathermap.org/api) API for the weather forecast data. The application display a simple and minimal weather forecast dashboard.

Features:
1. To view current city's weather forecast based on Geolocation's latitude and longitude.
2. To view other cities' 5 days weather forecast with 3-hour step.
3. To have cached selected cities in localStorage using [vuex-persist](https://github.com/championswimmer/vuex-persist).

<br>

Two main APIs being used to retrieve weather forecast daa:
1. `https://api.openweathermap.org/current`
2. `https://api.openweathermap.org/forecast5`

<br>

Icon API:
- `'http://openweathermap.org/img/wn/' + icon + '2x.png'`/

e.g. value for icon, `icon = '01d'`.

References:
- [Weather fields in API response > JSON > response.weather.icon](https://openweathermap.org/current#current_JSON) and,
- [Weather Icons](https://openweathermap.org/weather-conditions)

The list of cities are retrieved from [simplemaps](https://simplemaps.com/data/world-cities) and processed with the city's id from [city.list.min.json](http://bulk.openweathermap.org/sample/).

<br>

Preparation:
1. You'll need API Key to run api and retrieve weather forecast data. [Sign Up](https://openweathermap.org/) and get an API Key before you start.

Important note:
1. No proper error handling done, for any API call, Geolocation API and etc.
2. Temperature only dispaly in (°C) Celcius format now.
3. CORS issue with Firefox and Safari, do use **Chrome** browser to test this.

<hr>

## To run this project

This project is run using `yarn`.\
Node version is as mentioned in `package.json` or `.nvmrc`

### Install dependencies

```bash
$ yarn install
```

### Configuration

Create a `./.env` and setup API Key before going to next step

```
OPENWEATHER_APIKEY=<API_KEY>
```

### Serve with hot reload at localhost:3000

```bash
$ yarn dev
```

<hr>

## To build this project for production

After [Install dependencies](#install-dependencies) and [Configuration](#configuration) steps,
### Build and launch server

```bash
$ yarn build
$ yarn start
```

### Generate static project

Update `nuxt.config.js`'s target to `'static'` before you run the command below.

```bash
$ yarn generate
```


