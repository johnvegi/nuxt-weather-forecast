import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage,
    reducer: (state) => ({
      // uncomment to persist retrieved city's 5 days weather
      // citiesFiveDaysWeather: state.citiesFiveDaysWeather,
      // persist user selected cities
      selectedCities: state.selectedCities,
    }),
  }).plugin(store)
}
