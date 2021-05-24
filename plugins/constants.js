const KELVIN_CELCIUS = -273.15
const DAY = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const NA_STR = 'N/A'

const constants = {
  DAY,
  KELVIN_CELCIUS,
  NA_STR,
}

export default (_, inject) => {
  inject('constants', constants)
}
