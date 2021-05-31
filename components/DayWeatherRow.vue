<template>
  <div
    class="day-weather-row"
    tabindex="0"
    :aria-label="dayStr + ' weather forecast'"
  >
    <div class="day-weather-day" tabindex="0" :aria-label="dayStr">
      {{ dayStr }}
    </div>
    <div>
      <img
        class="day-weather-icon"
        tabindex="0"
        alt="weather icon"
        :src="getIcon"
      />
    </div>
    <div
      class="day-weather-temp"
      tabindex="0"
      aria-label="max and min temperature"
    >
      <div class="day-weather-temp-max">
        {{ maxTempCelcius }}{{ isFahrenheit ? '&#8457;' : '&#8451;' }}
      </div>
      <div class="day-weather-temp-min">
        {{ minTempCelcius }}{{ isFahrenheit ? '&#8457;' : '&#8451;' }}
      </div>
    </div>
  </div>
</template>

<script>
import processTemperature from '~/utils/processTemperature'
export default {
  props: {
    day: {
      type: Number,
      default: -1,
    },
    icon: {
      type: String,
      default: null,
    },
    maxTemp: {
      type: Number,
      default: null,
    },
    minTemp: {
      type: Number,
      default: null,
    },
    isFahrenheit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dayStr() {
      return this.$constants.DAY[this.day] || this.$constants.NA_STR
    },
    getIcon() {
      // Temporary tightly coupled to openweathermap images
      return (
        this.icon && 'http://openweathermap.org/img/wn/' + this.icon + '@2x.png'
      )
    },
    maxTempCelcius() {
      if (this.maxTemp == null) return this.$constants.NA_STR
      return processTemperature(this.maxTemp, this.isFahrenheit)
    },
    minTempCelcius() {
      if (this.minTemp == null) return this.$constants.NA_STR
      return processTemperature(this.minTemp, this.isFahrenheit)
    },
  },
}
</script>

<style>
.day-weather-row {
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  min-height: 55px;
  width: 100%;
}
.day-weather-day {
  min-width: 120px;
}
.day-weather-icon {
  width: 55px;
  height: 55px;
}
.day-weather-temp {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  padding-left: 32px;
}
.day-weather-temp-min {
  opacity: 0.8;
}
</style>
