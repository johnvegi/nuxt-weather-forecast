<template>
  <div class="weather-card-sm" tabindex="0">
    <img class="weather-card-sm-icon" alt="weather icon" :src="getIcon" />
    <div class="weather-card-sm-temp">
      {{ processedTemp }}{{ isFahrenheit ? '&#8457;' : '&#8451;' }}
    </div>
    <div class="weather-card-sm-time">{{ timeAMPM }}</div>
  </div>
</template>

<script>
import { parseISO } from 'date-fns'
import processTemperature from '~/utils/processTemperature'
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    temperature: {
      type: Number,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    isFahrenheit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getIcon() {
      // Temporary tightly coupled to openweathermap images
      return (
        this.icon && 'http://openweathermap.org/img/wn/' + this.icon + '@2x.png'
      )
    },
    processedTemp() {
      if (this.temperature == null) return this.$constants.NA_STR
      return processTemperature(this.temperature, this.isFahrenheit)
    },
    timeAMPM() {
      const hour = parseISO(this.time).getHours()
      return hour < 12
        ? hour === 0
          ? '12am'
          : `${hour}am`
        : hour === 12
        ? '12pm'
        : `${hour - 12}pm`
    },
  },
}
</script>

<style>
.weather-card-sm {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: flex-start;
  gap: 8px;
}

.weather-card-sm-icon {
  width: 55px;
  height: 55px;
}

.weather-card-sm-temp {
  font-size: 1rem;
}

.weather-card-sm-time {
  font-size: 0.75rem;
}
</style>
