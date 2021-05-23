<template>
  <img class="weather-icon" alt="weather icon" :src="getIcon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    getIcon() {
      // Temporary tightly coupled to openweathermap images
      return (
        this.icon && 'http://openweathermap.org/img/wn/' + this.icon + '@2x.png'
      )
    },
  },
}
</script>

<style>
.weather-icon {
  width: 100px;
  height: 100px;
}
</style>
