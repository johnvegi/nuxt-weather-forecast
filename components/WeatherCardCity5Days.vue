<template>
  <div class="five-days-weather-card">
    <div
      v-for="weather in cityWeather"
      :key="weather.day"
      class="day-weather-wrapper"
    >
      <DayWeatherRow
        :day="weather.day"
        :icon="weather.icon"
        :max-temp="weather.maxTemp"
        :min-temp="weather.minTemp"
        :is-fahrenheit="isFahrenheit"
      />
      <div class="overflow-scroll">
        <DayWeatherSteps
          :weathers="weather.threeHourly"
          :is-fahrenheit="isFahrenheit"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cityWeather: {
      type: Array,
      default() {
        return []
      },
    },
    isFahrenheit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedWeather() {
      return this.cityWeather
    },
  },
}
</script>

<style>
.five-days-weather-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  gap: 32px;
}

.day-weather-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.day-weather-wrapper::before {
  content: '';
  position: absolute;
  top: -16px;
  left: -16px;
  right: -16px;
  bottom: -16px;
  background-color: rgba(0, 0, 0, 2%);
  border-radius: 16px;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: -1;
}

.day-weather-wrapper:hover::before {
  opacity: 1;
}

.day-weather-wrapper .overflow-scroll {
  overflow-y: scroll;
  max-width: 100%;
}
</style>
