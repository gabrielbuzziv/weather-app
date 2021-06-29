import axios from 'axios';

import { format, ptBR } from 'date-fns';

import { convertKevinToCelsius } from '../lib/tempeature';

const { OPENWEATHER_API_URL } = process.env;
const { OPENWEATHER_API_KEY } = process.env;
const { OPENWEATHER_CDN_URL } = process.env;

interface ForecastProps {
  dt: number;
  temp: {
    day: number;
  },
  weather: {
    icon: string;
  }[]
}

export const OpenWeatherAPI = axios.create({
  baseURL: OPENWEATHER_API_URL,
});

export const getWeatherByCity = async (cityName: string) => {
  try {
    const { data } = await OpenWeatherAPI.get('/weather', {
      params: {
        q: cityName,
        appid: OPENWEATHER_API_KEY,
      },
    });

    return {
      iconUrl: `${OPENWEATHER_CDN_URL}/${data.weather[0].icon}@2x.png`,
      temp: convertKevinToCelsius(data.main.temp),
      temp_min: convertKevinToCelsius(data.main.temp_min),
      temp_max: convertKevinToCelsius(data.main.temp_max),
      lat: data.coord.lat,
      lon: data.coord.lon,
    };
  } catch (err) {
    throw new Error('Não foi possível comunicar com a API de Previsão do Tempo.');
  }
};

export const getForecastsByCity = async (lat: number, lon: number) => {
  try {
    const { data } = await OpenWeatherAPI.get('/onecall', {
      params: {
        appid: OPENWEATHER_API_KEY,
        lat,
        lon,
      },
    });

    const { daily } = data;
    daily.shift();

    return daily.map((day: ForecastProps) => ({
      id: String(day.dt),
      temp: convertKevinToCelsius(day.temp.day),
      iconUrl: `${OPENWEATHER_CDN_URL}/${day.weather[0].icon}@2x.png`,
      dayOfWeek: format(new Date(day.dt * 1000), 'E', { locale: ptBR }),
      date: format(new Date(day.dt * 1000), 'dd MMMM', { locale: ptBR }),
    }));
  } catch (err) {
    throw new Error('Não foi possível comunicar com a API de Previsão do Tempo.');
  }
};
