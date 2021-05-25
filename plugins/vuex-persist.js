import VuexPersistence from 'vuex-persist'

/**
 * console warning - Mismatching childNodes vs. VNodes:
 * It is due to the mismatch of store value, since we persisted 'selectedCities' value,
 * which is different comparing server vs cliet
 */
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
