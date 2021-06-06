<template>
  <div class="weather-steps">
    <WeatherCardSm
      v-for="weather in weathers"
      :key="weather.time"
      :icon="weather.icon"
      :temperature="weather.temp"
      :time="weather.time"
      :is-fahrenheit="isFahrenheit"
    />
  </div>
</template>

<script>
export default {
  props: {
    weathers: {
      type: Array,
      default: () => {
        return []
      },
    },
    isFahrenheit: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.weather-steps {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
}
</style>
