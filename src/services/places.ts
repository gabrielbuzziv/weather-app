import axios from 'axios';

const { GOOGLE_PLACES_API_URL } = process.env;

export const PlacesAPI = axios.create({
  baseURL: GOOGLE_PLACES_API_URL,
});
