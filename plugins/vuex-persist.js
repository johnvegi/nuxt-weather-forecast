import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage,
    reducer: (state) => ({
      citiesFiveDaysWeather: state.citiesFiveDaysWeather,
      selectedCities: state.selectedCities,
    }),
  }).plugin(store)
}
