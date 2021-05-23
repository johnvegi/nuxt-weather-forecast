import cities from '~/assets/cities'

const cityById = cities.reduce(
  (a, c) => ({ ...a, [c.open_weather_id || c.id]: c }),
  {}
)

export const state = () => ({
  current: {
    status: 'idle',
    data: {
      main: {},
      weather: [],
    },
  },
  citiesFiveDaysWeather: {},
  // // update to id
  selectedTabIndex: 0,
  selectedCities: [1733046],
  cityById,
})

export const mutations = {
  currentFetchStatus(state, status) {
    state.current.status = status
  },
  current(state, current) {
    state.current.data = current
  },
  receiveCitiesFiveDaysWeather(state, { cityId, cityFiveDaysWeather }) {
    state.citiesFiveDaysWeather = {
      ...state.citiesFiveDaysWeather,
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
