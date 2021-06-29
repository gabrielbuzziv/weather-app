import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import { Alert } from 'react-native';
import { WeatherCityProps } from '../components/WeatherCity';
import { COLLECTION_CITIES } from '../config/storage';
import { getWeatherByCity } from '../services/weather';
import { CityProps } from '../components/City';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CitiesContextData {
  cities: WeatherCityProps[];
  unfavorites: WeatherCityProps[];
  favorites: WeatherCityProps[];
  saving: boolean;
  addCity: (city: CityProps) => void;
  removeCity: (city: CityProps) => Promise<void>;
  toggleFavorite: (city: WeatherCityProps) => void;
}

interface Props {
  children: ReactNode;
}

const CitiesContext = createContext({} as CitiesContextData);

export function CitiesProvider({ children }: Props) {
  const [cities, setCities] = useState<WeatherCityProps[]>(
    [] as WeatherCityProps[]
  );

  const [saving, setSaving] = useState(false);

  const unfavorites = useMemo(() => {
    return cities.filter((item: WeatherCityProps) => !item.isFavorite);
  }, [cities]);

  const favorites = useMemo(() => {
    return cities.filter((item: WeatherCityProps) => item.isFavorite);
  }, [cities]);

  function sortCitiesByLastUpdate(citiesList: WeatherCityProps[]) {
    return citiesList
      .sort((firstCity: WeatherCityProps, secondCity: WeatherCityProps) => {
        if (firstCity.lastUpdate < secondCity.lastUpdate) {
          return -1;
        }

        if (firstCity.lastUpdate > secondCity.lastUpdate) {
          return 1;
        }

        return 0;
      })
      .reverse();
  }

  async function fetchCities() {
    const response = await AsyncStorage.getItem(COLLECTION_CITIES);
    const storagedCities = response ? JSON.parse(response) : [];

    return sortCitiesByLastUpdate(storagedCities);
  }

  async function addCity(city: CityProps) {
    setSaving(true);
    const storagedCities = await fetchCities();

    let weatherCityData = {
      iconUrl: '',
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      lat: 0,
      lon: 0,
    };

    try {
      weatherCityData = await getWeatherByCity(city.name);
    } catch (err) {
      Alert.alert(err.message);
      setSaving(false);
      return;
    }

    const updatedCities = [
      ...storagedCities,
      {
        ...city,
        ...weatherCityData,
        isFavorite: false,
        lastUpdate: Math.floor(Date.now() / 1000), // unix timestamp format
      },
    ];

    await AsyncStorage.setItem(
      COLLECTION_CITIES,
      JSON.stringify(sortCitiesByLastUpdate(updatedCities))
    );
    setCities(sortCitiesByLastUpdate(updatedCities));
    setSaving(false);
  }

  async function removeCity(city: WeatherCityProps) {
    const storagedCities = await fetchCities();
    const updatedCities = storagedCities.filter(item => item.id !== city.id)

    await AsyncStorage.setItem(
      COLLECTION_CITIES,
      JSON.stringify(sortCitiesByLastUpdate(updatedCities))
    );
    setCities(updatedCities)
  }

  async function toggleFavorite(city: WeatherCityProps) {
    const storageCities = await fetchCities();

    const cityIndex = storageCities.findIndex(
      (item: WeatherCityProps) => item.id === city.id
    );
    storageCities[cityIndex].isFavorite = !storageCities[cityIndex].isFavorite;

    await AsyncStorage.setItem(
      COLLECTION_CITIES,
      JSON.stringify(storageCities)
    );
    setCities(storageCities);
  }

  async function updateCities(citiesList: WeatherCityProps[]) {
    const currentTime = Math.floor(Date.now() / 1000);

    const updatedCities = await Promise.all<WeatherCityProps>(
      citiesList.map(async (item: WeatherCityProps) => {
        /**
         * Caso a última atualização da previsão foi a mais de 30 minutos.
         */
        if (Math.floor((currentTime - item.lastUpdate) / 60) > 30) {
          console.log('requesting from data base ...');

          try {
            const weatherCityData = await getWeatherByCity(item.name);

            return { ...item, ...weatherCityData };
          } catch (err) {
            return item;
          }
        }

        return item;
      })
    );

    if (updatedCities.length) {
      await AsyncStorage.setItem(
        COLLECTION_CITIES,
        JSON.stringify(updatedCities)
      );
    }

    return updatedCities;
  }

  async function loadCities() {
    const storagedCities = await fetchCities();
    const updatedCities = await updateCities(storagedCities);

    setCities(updatedCities);
  }

  useEffect(() => {
    loadCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        unfavorites,
        favorites,
        saving,
        addCity,
        removeCity,
        toggleFavorite,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);

  return context;
}
