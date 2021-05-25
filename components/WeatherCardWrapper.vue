<template>
  <div class="weather-card-wrapper">
    <div class="weather-card-status">
      <div><i>Current location</i></div>
      <div v-if="currentFetchingStatus === 'loading'">
        <i>Retrieving...</i>
      </div>
    </div>
    <WeatherCard
      v-if="current"
      :icon="currentWeather.icon"
      :city-name="current.name"
      :weather="currentWeather.main"
      :temperature="current.main.temp"
      :temperature-feels-like="current.main.feels_like"
      :humidity="current.main.humidity"
      :pressure="current.main.pressure"
    />
  </div>
</template>

<script>
const API_KEY = process.env.OPENWEATHER_API_KEY
const API_PATH = process.env.OPENWEATHER_API_PATH
function getCurrenLocation(cb = () => {}) {
  if (!navigator.geolocation) {
    throw new Error('navigator.geolocation not available')
  }

  function showError(error) {
    throw error
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude
    const long = position.coords.longitude

    cb(lat, long)
  }, showError)
}

function retrieveCurrentLocationWeather() {
  this.$store.commit('currentFetchStatus', 'loading')
  try {
    getCurrenLocation(async (lat, long) => {
      if (lat && long) {
        const current = await fetch(
          `${API_PATH}weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
        ).then((response) => response.json())
        this.$store.commit('current', current)
        this.$store.commit('currentFetchStatus', 'succeded')
        return
      }
      this.$store.commit('currentFetchStatus', 'failed')
    })
  } catch {
    this.$store.commit('currentFetchStatus', 'failed')
  }
}

export default {
  computed: {
    current() {
      return this.$store.state.current?.data
    },
    currentWeather() {
      return this.$store.state.current?.data?.weather[0] || {}
    },
    currentFetchingStatus() {
      return this.$store.state.current?.status
    },
  },
  mounted() {
    // don't call api if there's cached data
    if (!this.$store.state.current?.data.name) {
      // can't be done through fetch hook, since it's based on browser's Geolocation API
      retrieveCurrentLocationWeather.bind(this)()
    }
  },
}
</script>

<style>
.weather-card-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 440px;
  width: 100%;
}

.weather-card-status {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
</style>
