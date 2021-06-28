import axios from 'axios';

export const OpenWeatherAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
})