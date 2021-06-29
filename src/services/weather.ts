import axios from 'axios';
import { convertKevinToCelsius } from '../lib/tempeature';

const { OPENWEATHER_API_URL } = process.env;
const { OPENWEATHER_API_KEY } = process.env;
const { OPENWEATHER_CDN_URL } = process.env;

export const OpenWeatherAPI = axios.create({
  baseURL: OPENWEATHER_API_URL
})

export const getWeatherByCity = async (cityName: string) => {
  try {
    const { data } = await OpenWeatherAPI.get('/weather', {
      params: {
        q: cityName,
        appid: OPENWEATHER_API_KEY
      }
    })

    return {
      iconUrl: `${OPENWEATHER_CDN_URL}/${data.weather[0].icon}@2x.png`,
      temp: convertKevinToCelsius(data.main.temp),
      temp_min: convertKevinToCelsius(data.main.temp_min),
      temp_max: convertKevinToCelsius(data.main.temp_max),
      lat: data.coord.lat,
      lon: data.coord.lon
    }
  } catch (err) {
    throw new Error('Não foi possível comunicar com a API de Previsão do Tempo.')
  }
};
