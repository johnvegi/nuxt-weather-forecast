import cities from '~/lists/cities'

const cityById = cities.reduce(
  (a, c) => ({ ...a, [c.open_weather_id || c.id]: c }),
  {}
)

export const state = () => ({
  isFahrenheit: false,
  current: {
    status: 'idle',
    data: {
      main: {},
      weather: [],
    },
  },
  citiesFiveDaysWeather: {
    status: 'idle',
    data: {},
  },
  // // update to id
  selectedTabIndex: 0,
  selectedCities: [1733046],
  cityById,
})

export const mutations = {
  toggleTemperatureUnit(state) {
    state.isFahrenheit = !state.isFahrenheit
  },
  currentFetchStatus(state, status) {
    state.current.status = status
  },
  current(state, current) {
    state.current.data = current
  },
  receiveCityDaysWeatherFetchStatus(state, status) {
    state.citiesFiveDaysWeather.status = status
  },
  receiveCityFiveDaysWeather(state, { cityId, cityFiveDaysWeather }) {
    state.citiesFiveDaysWeather.data = {
      ...state.citiesFiveDaysWeather.data,
      [cityId]: cityFiveDaysWeather,
    }
  },
  addSelectedCities(state, cityId) {
    state.selectedCities = [...state.selectedCities, cityId]
  },
  updateSelectedTabIndex(state, index) {
    state.selectedTabIndex = index
  },
}
