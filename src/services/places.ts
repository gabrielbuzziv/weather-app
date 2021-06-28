import axios from 'axios';

export const PlacesAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place',
})
