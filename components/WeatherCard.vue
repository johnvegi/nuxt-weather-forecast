<template>
  <div class="weather-card" tabindex="0">
    <div class="weather-details">
      <WeatherIcon :icon="icon" />
      <div class="weather-details-1">
        <h2 class="weather-city-name">
          {{ cityName }}
        </h2>
        <div class="weather-desc">
          {{ weather }}
        </div>
        <div class="weather-temp">
          {{ processedTemp }}{{ isFahrenheit ? '&#8457;' : '&#8451;' }}
        </div>
      </div>
    </div>
    <div class="weather-details-2">
      <div class="weather-details-sm">
        <label><strong>Feels Like</strong></label>
        <div>
          {{ processedTempFeelsLike }}{{ isFahrenheit ? '&#8457;' : '&#8451;' }}
        </div>
      </div>
      <div class="weather-details-sm">
        <label><strong>Humidity</strong></label>
        <div>{{ humidity }}%</div>
      </div>
      <div class="weather-details-sm">
        <label><strong>Pressure</strong></label>
        <div>{{ pressure }}hPa</div>
      </div>
    </div>
  </div>
</template>

<script>
import processTemperature from '~/utils/processTemperature'
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    cityName: {
      type: String,
      default: '',
    },
    weather: {
      type: String,
      default: '',
    },
    temperature: {
      type: Number,
      default: null,
    },
    temperatureFeelsLike: {
      type: Number,
      default: null,
    },
    humidity: {
      type: Number,
      default: null,
    },
    pressure: {
      type: Number,
      default: null,
    },
    isFahrenheit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    processedTemp() {
      if (this.temperature == null) return this.$constants.NA_STR
      return processTemperature(this.temperature, this.isFahrenheit)
    },
    processedTempFeelsLike() {
      if (this.temperatureFeelsLike == null) return this.$constants.NA_STR
      return processTemperature(this.temperatureFeelsLike, this.isFahrenheit)
    },
  },
}
</script>

<style>
.weather-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  border-radius: 16px;
  /* box-shadow: 0 8px 16px rgb(0, 0, 0, 10%); */
  padding: 32px;
  gap: 80px;
}

.weather-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
}

.weather-details-1 {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.weather-details-1 h2 {
  font-size: 2rem;
  padding: 0;
  margin: 0;
}

.weather-details-1 .weather-desc {
  font-size: 1.75rem;
}

.weather-details-1 .weather-temp {
  font-size: 1.5rem;
}

.weather-details-2 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.weather-details-sm {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.weather-details-sm label {
  font-size: 1.25rem;
}
</style>
