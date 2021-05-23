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
        :src="'http://openweathermap.org/img/wn/' + iconId + '@2x.png'"
      />
    </div>
    <div
      class="day-weather-temp"
      tabindex="0"
      aria-label="max and min temperature"
    >
      <div class="day-weather-temp-max">{{ maxTempCelcius }}&#8451;</div>
      <div class="day-weather-temp-min">{{ minTempCelcius }}&#8451;</div>
    </div>
  </div>
</template>

<script>
const DAY = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const KELVIN_CELCIUS = -273.15
const NA_STR = 'N/A'

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
  },
  computed: {
    dayStr() {
      return DAY[this.day] || NA_STR
    },
    iconId() {
      return this.icon
    },
    maxTempCelcius() {
      if (this.maxTemp == null) return NA_STR
      return this.maxTemp
        ? (this.maxTemp + KELVIN_CELCIUS).toFixed(1)
        : this.maxTemp
    },
    minTempCelcius() {
      if (this.minTemp == null) return NA_STR
      return this.minTemp
        ? (this.minTemp + KELVIN_CELCIUS).toFixed(1)
        : this.minTemp
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
