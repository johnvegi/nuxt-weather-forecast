// sample data, retrieved through http://api.openweathermap.org/data/2.5/forecast?q=Kuala%20Lumpur&appid={API_KEY}
export default {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1621749600,
      main: {
        temp: 305.78,
        feels_like: 310.76,
        temp_min: 304.11,
        temp_max: 305.78,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1002,
        humidity: 57,
        temp_kf: 1.67,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 2.38,
        deg: 281,
        gust: 2.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-23 06:00:00',
    },
    {
      dt: 1621760400,
      main: {
        temp: 305.28,
        feels_like: 309.63,
        temp_min: 304.27,
        temp_max: 305.28,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1000,
        humidity: 57,
        temp_kf: 1.01,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 1.88,
        deg: 251,
        gust: 1.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-23 09:00:00',
    },
    {
      dt: 1621771200,
      main: {
        temp: 301.79,
        feels_like: 305.27,
        temp_min: 299.79,
        temp_max: 301.79,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 71,
        temp_kf: 2,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 0.59,
        deg: 183,
        gust: 0.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-23 12:00:00',
    },
    {
      dt: 1621782000,
      main: {
        temp: 299.08,
        feels_like: 299.82,
        temp_min: 299.08,
        temp_max: 299.08,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1004,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.67,
        deg: 38,
        gust: 0.72,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-23 15:00:00',
    },
    {
      dt: 1621792800,
      main: {
        temp: 298.14,
        feels_like: 298.89,
        temp_min: 298.14,
        temp_max: 298.14,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1003,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 1.36,
        deg: 31,
        gust: 1.34,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-23 18:00:00',
    },
    {
      dt: 1621803600,
      main: {
        temp: 297.69,
        feels_like: 298.42,
        temp_min: 297.69,
        temp_max: 297.69,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1002,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 1.05,
        deg: 47,
        gust: 1.05,
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-23 21:00:00',
    },
    {
      dt: 1621814400,
      main: {
        temp: 298.8,
        feels_like: 299.56,
        temp_min: 298.8,
        temp_max: 298.8,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1003,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 48,
      },
      wind: {
        speed: 0.82,
        deg: 104,
        gust: 1.01,
      },
      visibility: 10000,
      pop: 0.22,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-24 00:00:00',
    },
    {
      dt: 1621825200,
      main: {
        temp: 303.57,
        feels_like: 307.48,
        temp_min: 303.57,
        temp_max: 303.57,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1004,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.92,
        deg: 196,
        gust: 2.12,
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-24 03:00:00',
    },
    {
      dt: 1621836000,
      main: {
        temp: 306.17,
        feels_like: 310.07,
        temp_min: 306.17,
        temp_max: 306.17,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 1.68,
        deg: 225,
        gust: 2.01,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-24 06:00:00',
    },
    {
      dt: 1621846800,
      main: {
        temp: 304.52,
        feels_like: 309.34,
        temp_min: 304.52,
        temp_max: 304.52,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1000,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 2.66,
        deg: 231,
        gust: 3.14,
      },
      visibility: 10000,
      pop: 0.09,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-24 09:00:00',
    },
    {
      dt: 1621857600,
      main: {
        temp: 300.02,
        feels_like: 303.05,
        temp_min: 300.02,
        temp_max: 300.02,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1002,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 0.76,
        deg: 178,
        gust: 0.89,
      },
      visibility: 10000,
      pop: 0.21,
      rain: {
        '3h': 0.49,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-24 12:00:00',
    },
    {
      dt: 1621868400,
      main: {
        temp: 299.06,
        feels_like: 299.95,
        temp_min: 299.06,
        temp_max: 299.06,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1004,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 0.43,
        deg: 100,
        gust: 0.59,
      },
      visibility: 10000,
      pop: 0.23,
      rain: {
        '3h': 0.21,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-24 15:00:00',
    },
    {
      dt: 1621879200,
      main: {
        temp: 298.27,
        feels_like: 299.14,
        temp_min: 298.27,
        temp_max: 298.27,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1003,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 0.92,
        deg: 42,
        gust: 0.95,
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-24 18:00:00',
    },
    {
      dt: 1621890000,
      main: {
        temp: 297.52,
        feels_like: 298.34,
        temp_min: 297.52,
        temp_max: 297.52,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1002,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 48,
      },
      wind: {
        speed: 0.53,
        deg: 24,
        gust: 0.52,
      },
      visibility: 10000,
      pop: 0.14,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-24 21:00:00',
    },
    {
      dt: 1621900800,
      main: {
        temp: 298.38,
        feels_like: 299.2,
        temp_min: 298.38,
        temp_max: 298.38,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1004,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 0.8,
        deg: 90,
        gust: 0.98,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-25 00:00:00',
    },
    {
      dt: 1621911600,
      main: {
        temp: 304.17,
        feels_like: 308.55,
        temp_min: 304.17,
        temp_max: 304.17,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1004,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 1.3,
        deg: 210,
        gust: 1.49,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-25 03:00:00',
    },
    {
      dt: 1621922400,
      main: {
        temp: 306.59,
        feels_like: 310.66,
        temp_min: 306.59,
        temp_max: 306.59,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 2.05,
        deg: 188,
        gust: 1.76,
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-25 06:00:00',
    },
    {
      dt: 1621933200,
      main: {
        temp: 305.55,
        feels_like: 309.93,
        temp_min: 305.55,
        temp_max: 305.55,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1000,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.76,
        deg: 201,
        gust: 2.57,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-25 09:00:00',
    },
    {
      dt: 1621944000,
      main: {
        temp: 300.47,
        feels_like: 303.5,
        temp_min: 300.47,
        temp_max: 300.47,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 0.75,
        deg: 197,
        gust: 1.6,
      },
      visibility: 10000,
      pop: 0.33,
      rain: {
        '3h': 0.23,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-25 12:00:00',
    },
    {
      dt: 1621954800,
      main: {
        temp: 299.54,
        feels_like: 299.54,
        temp_min: 299.54,
        temp_max: 299.54,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1003,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 62,
      },
      wind: {
        speed: 0.78,
        deg: 74,
        gust: 0.82,
      },
      visibility: 10000,
      pop: 0.48,
      rain: {
        '3h': 0.32,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-25 15:00:00',
    },
    {
      dt: 1621965600,
      main: {
        temp: 298.76,
        feels_like: 299.57,
        temp_min: 298.76,
        temp_max: 298.76,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1002,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 1.1,
        deg: 68,
        gust: 1.17,
      },
      visibility: 10000,
      pop: 0.63,
      rain: {
        '3h': 0.3,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-25 18:00:00',
    },
    {
      dt: 1621976400,
      main: {
        temp: 297.73,
        feels_like: 298.57,
        temp_min: 297.73,
        temp_max: 297.73,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 0.37,
        deg: 62,
        gust: 0.56,
      },
      visibility: 10000,
      pop: 0.79,
      rain: {
        '3h': 0.66,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-25 21:00:00',
    },
    {
      dt: 1621987200,
      main: {
        temp: 298.56,
        feels_like: 299.45,
        temp_min: 298.56,
        temp_max: 298.56,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1003,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 0.71,
        deg: 70,
        gust: 0.86,
      },
      visibility: 10000,
      pop: 0.71,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-26 00:00:00',
    },
    {
      dt: 1621998000,
      main: {
        temp: 303.47,
        feels_like: 307.97,
        temp_min: 303.47,
        temp_max: 303.47,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1004,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 1.57,
        deg: 187,
        gust: 2.06,
      },
      visibility: 10000,
      pop: 0.72,
      rain: {
        '3h': 0.47,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-26 03:00:00',
    },
    {
      dt: 1622008800,
      main: {
        temp: 305.3,
        feels_like: 309.97,
        temp_min: 305.3,
        temp_max: 305.3,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1001,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 2.35,
        deg: 191,
        gust: 2.49,
      },
      visibility: 10000,
      pop: 0.84,
      rain: {
        '3h': 0.86,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-26 06:00:00',
    },
    {
      dt: 1622019600,
      main: {
        temp: 301.83,
        feels_like: 306.63,
        temp_min: 301.83,
        temp_max: 301.83,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1001,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1.13,
        deg: 212,
        gust: 2.2,
      },
      visibility: 10000,
      pop: 0.91,
      rain: {
        '3h': 2.85,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-26 09:00:00',
    },
    {
      dt: 1622030400,
      main: {
        temp: 299.31,
        feels_like: 299.31,
        temp_min: 299.31,
        temp_max: 299.31,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 0.84,
        deg: 303,
        gust: 1,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        '3h': 1.63,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-26 12:00:00',
    },
    {
      dt: 1622041200,
      main: {
        temp: 298.4,
        feels_like: 299.38,
        temp_min: 298.4,
        temp_max: 298.4,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1005,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.2,
        deg: 10,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.69,
      rain: {
        '3h': 1.39,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-26 15:00:00',
    },
    {
      dt: 1622052000,
      main: {
        temp: 297.69,
        feels_like: 298.63,
        temp_min: 297.69,
        temp_max: 297.69,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1003,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.99,
        deg: 19,
        gust: 1.11,
      },
      visibility: 10000,
      pop: 0.89,
      rain: {
        '3h': 1.82,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-26 18:00:00',
    },
    {
      dt: 1622062800,
      main: {
        temp: 297.33,
        feels_like: 298.21,
        temp_min: 297.33,
        temp_max: 297.33,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.65,
        deg: 38,
        gust: 0.71,
      },
      visibility: 10000,
      pop: 0.81,
      rain: {
        '3h': 0.57,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-26 21:00:00',
    },
    {
      dt: 1622073600,
      main: {
        temp: 298.13,
        feels_like: 299.06,
        temp_min: 298.13,
        temp_max: 298.13,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1004,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.57,
        deg: 21,
        gust: 0.67,
      },
      visibility: 10000,
      pop: 0.79,
      rain: {
        '3h': 0.22,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-27 00:00:00',
    },
    {
      dt: 1622084400,
      main: {
        temp: 301.09,
        feels_like: 304.95,
        temp_min: 301.09,
        temp_max: 301.09,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1005,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 1.08,
        deg: 294,
        gust: 1.24,
      },
      visibility: 10000,
      pop: 0.62,
      rain: {
        '3h': 0.42,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-27 03:00:00',
    },
    {
      dt: 1622095200,
      main: {
        temp: 301.56,
        feels_like: 305.43,
        temp_min: 301.56,
        temp_max: 301.56,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 1.97,
        deg: 297,
        gust: 1.95,
      },
      visibility: 10000,
      pop: 0.77,
      rain: {
        '3h': 0.45,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-27 06:00:00',
    },
    {
      dt: 1622106000,
      main: {
        temp: 302.21,
        feels_like: 306.39,
        temp_min: 302.21,
        temp_max: 302.21,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1001,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1.15,
        deg: 260,
        gust: 1.13,
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.28,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-27 09:00:00',
    },
    {
      dt: 1622116800,
      main: {
        temp: 299.37,
        feels_like: 299.37,
        temp_min: 299.37,
        temp_max: 299.37,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 0.58,
        deg: 206,
        gust: 0.75,
      },
      visibility: 10000,
      pop: 0.45,
      rain: {
        '3h': 0.25,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-27 12:00:00',
    },
    {
      dt: 1622127600,
      main: {
        temp: 298.59,
        feels_like: 299.46,
        temp_min: 298.59,
        temp_max: 298.59,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1004,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 0.43,
        deg: 115,
        gust: 0.61,
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        '3h': 0.35,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-05-27 15:00:00',
    },
    {
      dt: 1622138400,
      main: {
        temp: 298.15,
        feels_like: 299,
        temp_min: 298.15,
        temp_max: 298.15,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1004,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 0.5,
        deg: 111,
        gust: 0.56,
      },
      visibility: 10000,
      pop: 0.32,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-27 18:00:00',
    },
    {
      dt: 1622149200,
      main: {
        temp: 297.84,
        feels_like: 298.69,
        temp_min: 297.84,
        temp_max: 297.84,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1003,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.85,
        deg: 60,
        gust: 0.81,
      },
      visibility: 10000,
      pop: 0.37,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-27 21:00:00',
    },
    {
      dt: 1622160000,
      main: {
        temp: 298.78,
        feels_like: 299.64,
        temp_min: 298.78,
        temp_max: 298.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1004,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 0.45,
        deg: 103,
        gust: 0.58,
      },
      visibility: 10000,
      pop: 0.29,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-28 00:00:00',
    },
    {
      dt: 1622170800,
      main: {
        temp: 303.03,
        feels_like: 307.21,
        temp_min: 303.03,
        temp_max: 303.03,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1005,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.35,
        deg: 187,
        gust: 1.94,
      },
      visibility: 10000,
      pop: 0.42,
      rain: {
        '3h': 0.2,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-05-28 03:00:00',
    },
  ],
  city: {
    id: 1733046,
    name: 'Kuala Lumpur',
    coord: {
      lat: 3.1431,
      lon: 101.6865,
    },
    country: 'MY',
    population: 0,
    timezone: 28800,
    sunrise: 1621724512,
    sunset: 1621768705,
  },
}
