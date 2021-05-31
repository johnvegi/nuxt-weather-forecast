const KELVIN_CELCIUS = -273.15

function processTemperature(kelvin, isFahrenheit, decimals = 1) {
  if (isFahrenheit)
    return (((kelvin + KELVIN_CELCIUS) * 9) / 5 + 32).toFixed(decimals)
  return (kelvin + KELVIN_CELCIUS).toFixed(decimals)
}

export default processTemperature
