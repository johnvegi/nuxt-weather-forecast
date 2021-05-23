<template>
  <div class="container">
    <div class="weather">
      <WeatherCardWrapper />
      <OtherCities />
    </div>
    <footer>Nuxt Weather Forecast &copy; {{ new Date().getFullYear() }}</footer>
  </div>
</template>

<script>
export default {}
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
  max-width: 1440px;
  margin: 0 auto;
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

footer {
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  margin-top: 32px;
}
</style>
