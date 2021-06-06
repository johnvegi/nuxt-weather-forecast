# Getting Started

This project is using Nuxt.js with [OpenWeather](https://openweathermap.org/api) API for the weather forecast data. The application display a simple and minimal weather forecast dashboard.

Features:
1. To view current city's weather forecast based on Geolocation's latitude and longitude.
2. To view other cities' 5 days weather forecast with 3-hour step.
3. To have cached selected cities in localStorage using [vuex-persist](https://github.com/championswimmer/vuex-persist).

<br>

Two main APIs being used to retrieve weather forecast data:
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

Important note / Improvements:
1. No proper error handling done, for any API call, Geolocation API and etc. So, assumption is to always allow location when browser prompted.
2. No data validation for persisted data.
3. City tab changing, then retrieve 5 days weather forecast data, will potentially have race condition.
4. ~~CORS issue with Firefox and Safari, do use **Chrome** browser to test this.~~ Updated to use fetch API. CORS issue appearing when using axios, it is due to preflight issue with OPTIONS method being run. So, By using fetch API, it means IE browser is not supported. [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#browser_compatibility).
5. Geolocation API is failing in Safari due to insecure connection (http://localhost). Other cities feature are working fine.
6. This project is not tested with IE browser.

<hr>

## To run this project

This project is run using `yarn`.\
Node version is as mentioned in `package.json` or `.nvmrc`

### Install dependencies

```bash
$ yarn install
```

### Configuration

Create a `./.env` and setup API key and path before going to next step

```
OPENWEATHER_API_KEY=<API_KEY>
OPENWEATHER_API_PATH=http://api.openweathermap.org/data/2.5/
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


