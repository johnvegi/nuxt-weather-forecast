<template>
  <div class="container">
    <div class="weather">
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
      <div class="tabs-wrapper">
        <h2>Other Cities</h2>
        <div class="tabs">
          <ul>
            <li v-for="(city, index) in selectedCities" :key="city.id">
              <span
                class="tab"
                :class="{ active: viewingCityIndex === index }"
                tabIndex="0"
                role="tab"
                :aria-selected="viewingCityIndex === index"
                :aria-label="city.city"
                @click="(e) => onCityTabClick(e, index)"
              >
                {{ city.city }}
              </span>
            </li>
          </ul>
          <div class="add-city-wrapper">
            <select id="cities">
              <option
                v-for="option in citiesOption"
                :key="option.open_weather_id"
                :value="option.open_weather_id"
              >
                {{ option.city }}
              </option>
            </select>
            <button aria-label="Add City" @click="addCityClick">+</button>
          </div>
        </div>
        <City5DaysCard :city-weather="fiveDaysWeather" />
      </div>
    </div>
  </div>
</template>

<script>
const API_KEY = process.env.OPENWEATHER_APIKEY
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
  getCurrenLocation(async (lat, long) => {
    try {
      if (lat && long) {
        const current = await this.$axios.$get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
        )
        this.$store.commit('current', current)
        this.$store.commit('currentFetchStatus', 'succeded')
        return
      }
      this.$store.commit('currentFetchStatus', 'failed')
    } catch {
      this.$store.commit('currentFetchStatus', 'failed')
    }
  })
}

async function retrieveCity5DayWeather(cityId) {
  // this.$store.commit('currentFetchStatus', 'loading')
  try {
    const cityWeather = await this.$axios.$get(
      `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}`
    )
    this.$store.commit('receiveCitiesFiveDaysWeather', {
      cityId,
      cityFiveDaysWeather: cityWeather,
    })
    // this.$store.commit('currentFetchStatus', 'succeded')
  } catch {
    // this.$store.commit('currentFetchStatus', 'failed')
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
    current() {
      return this.$store.state.current?.data
    },
    currentWeather() {
      return this.$store.state.current?.data?.weather[0] || {}
    },
    currentFetchingStatus() {
      return this.$store.state.current?.status
    },
    fiveDaysWeather() {
      const index = this.$store.state.selectedTabIndex
      const cityId = this.$store.state.selectedCities[index]
      const cityWeather = process5DaysWeather(
        this.$store.state.citiesFiveDaysWeather[cityId]
      )

      return cityWeather
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
    if (!this.$store.state.current?.data.name) {
      retrieveCurrentLocationWeather.bind(this)()
    }
    const index = this.$store.state.selectedTabIndex
    const cityId = this.$store.state.selectedCities[index]
    if (cityId && !this.$store.state.citiesFiveDaysWeather[cityId]) {
      await retrieveCity5DayWeather.bind(this)(cityId)
    }
  },
  methods: {
    async addCityClick() {
      const city = parseInt(document.querySelector('#cities').value)
      if (!city) return
      try {
        await retrieveCity5DayWeather.bind(this)(city)
        this.$store.commit('addSelectedCities', city)
        const selectedCities = this.$store.state.selectedCities.length
        this.$store.commit('updateSelectedTabIndex', selectedCities - 1)
      } catch {}
    },
    onCityTabClick(e, index) {
      this.$store.commit('updateSelectedTabIndex', index)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px;
}

.weather {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 64px;
}

@media (min-width: 1024px) {
  .weather .tabs-wrapper {
    width: calc(100% - 440px);
  }
}

@media (max-width: 1023px) {
  .weather {
    flex-direction: column;
    justify-content: center;
  }
}

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

.tabs-wrapper {
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

.tabs {
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.tabs ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.tabs ul > li {
  float: left;
}

.tab {
  position: relative;
  margin-right: 32px;
  padding: 0 8px;
  cursor: pointer;
  font-weight: bold;
  line-height: 1.5;
}

.tab::before {
  content: '';
  position: absolute;
  background-color: rgba(0, 0, 0, 5%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: -1;
}

.tab:hover::before {
  opacity: 1;
}

.tab.active {
  text-decoration: underline;
  text-underline-position: under;
}

.add-city-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
