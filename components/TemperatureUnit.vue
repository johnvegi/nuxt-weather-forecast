<template>
  <div class="temperature-unit">
    <button
      aria-label="Fahrenheit"
      alt="Fahrenheit"
      :class="{ active: !isFahrenheit }"
      @click="(e) => isFahrenheit && toggle(e)"
    >
      &#8451;
    </button>
    <button
      aria-label="Celcius"
      alt="Celcius"
      :class="{ active: isFahrenheit }"
      @click="(e) => !isFahrenheit && toggle(e)"
    >
      &#8457;
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    isFahrenheit() {
      return this.$store.state.isFahrenheit
    },
  },
  methods: {
    toggle() {
      this.$store.commit('toggleTemperatureUnit')
    },
  },
}
</script>

<style>
.temperature-unit {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
}

.temperature-unit button {
  appearance: none;
  background-color: transparent;
  border: 0;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  cursor: default;
  transition: all 0.3s ease;
}

.temperature-unit button:not(.active):hover {
  background-color: rgba(0, 0, 0, 5%);
  cursor: pointer;
}

.temperature-unit button.active {
  font-weight: bold;
}
</style>
