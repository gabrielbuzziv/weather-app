import axios from 'axios';

const { GOOGLE_PLACES_API_URL } = process.env;
const { GOOGLE_PLACES_API_KEY } = process.env;

export const PlacesAPI = axios.create({
  baseURL: GOOGLE_PLACES_API_URL,
})