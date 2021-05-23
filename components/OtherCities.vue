<template>
  <div id="cities" class="tabs-wrapper">
    <div
      v-if="fiveDaysWeatherFetchingStatus === 'loading'"
      class="other-cities-status"
    >
      <i>Retrieving...</i>
    </div>
    <h2>Other Cities</h2>
    <OtherCitiesTabs
      :tabs="selectedCities"
      :selected-index="viewingCityIndex"
      :selections="citiesOption"
      :on-tab-click="onCityTabClick"
      :on-add-tab-click="addCityClick"
    />
    <WeatherCardCity5Days :city-weather="fiveDaysWeather" />
  </div>
</template>

<script>
const API_KEY = process.env.OPENWEATHER_APIKEY
async function retrieveCity5DayWeather(cityId) {
  this.$store.commit('receiveCityDaysWeatherFetchStatus', 'loading')
  try {
    const cityWeather = await this.$axios.$get(
      `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}`
    )
    cityWeather.last_fetch_dt = new Date().getTime()
    this.$store.commit('receiveCityFiveDaysWeather', {
      cityId,
      cityFiveDaysWeather: cityWeather,
    })
    this.$store.commit('receiveCityDaysWeatherFetchStatus', 'succeded')
  } catch {
    this.$store.commit('receiveCityDaysWeatherFetchStatus', 'failed')
  }
}

function process5DaysWeather(data) {
  if (!data) return []
  const map = new Map()

  data.list.forEach((w) => {
    const date = new Date(w.dt_txt)
    const day = date.getDay()
    let result = map.get(day) || { threeHourly: [] }
    const step = {
      day,
      time: w.dt_txt,
      icon: w.weather[0].icon,
      temp: w.main.temp,
      maxTemp: w.main.temp_max,
      minTemp: w.main.temp_max,
    }
    if (!result.threeHourly.length) {
      result = {
        ...result,
        ...step,
      }
    }
    result.threeHourly = [...result.threeHourly, step]

    map.set(day, result)
  })

  return Array.from(map.values())
}

export default {
  computed: {
    fiveDaysWeather() {
      const index = this.$store.state.selectedTabIndex
      const cityId = this.$store.state.selectedCities[index]
      const cityWeather = process5DaysWeather(
        this.$store.state.citiesFiveDaysWeather.data[cityId]
      )
      return cityWeather
    },
    fiveDaysWeatherFetchingStatus() {
      const status = this.$store.state.citiesFiveDaysWeather.status
      return status
    },
    selectedCities() {
      const cityById = this.$store.state.cityById
      const selectedCities = this.$store.state.selectedCities.map(
        (cityId) => cityById[cityId]
      )
      return selectedCities
    },
    citiesOption() {
      const selectedCities = this.$store.state.selectedCities
      const citiesOption = Object.values(this.$store.state.cityById).filter(
        (city) => !selectedCities.includes(city.open_weather_id)
      )
      return citiesOption
    },
    viewingCityIndex() {
      return this.$store.state.selectedTabIndex
    },
  },
  async mounted() {
    // don't call api if there's cached data
    const index = this.$store.state.selectedTabIndex
    const cityId = this.$store.state.selectedCities[index]
    if (cityId && !this.$store.state.citiesFiveDaysWeather.data[cityId]) {
      await retrieveCity5DayWeather.bind(this)(cityId)
    }
  },
  methods: {
    async addCityClick() {
      const city = parseInt(
        document.querySelector('#cities .tab-options').value
      )
      if (!city) return
      try {
        await retrieveCity5DayWeather.bind(this)(city)
        this.$store.commit('addSelectedCities', city)
        const selectedCities = this.$store.state.selectedCities.length
        this.$store.commit('updateSelectedTabIndex', selectedCities - 1)
      } catch {}
    },
    async onCityTabClick(e, index) {
      const cityId = this.$store.state.selectedCities[index]
      if (cityId && !this.$store.state.citiesFiveDaysWeather.data[cityId]) {
        await retrieveCity5DayWeather.bind(this)(cityId)
      }
      this.$store.commit('updateSelectedTabIndex', index)
    },
  },
}
</script>

<style>
.other-cities-status {
  position: absolute;
  top: 32px;
  right: 32px;
}

.tabs-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgb(0, 0, 0, 10%);
  padding: 32px;
  width: 100%;
  gap: 32px;
  min-height: calc(100vh - 260px);
}

.tabs-wrapper h2 {
  text-align: center;
}
</style>
