import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { WeatherCity, WeatherProps } from '../../components/WeatherCity';
import { WeatherFavorite } from '../../components/WeatherFavorite';

import {
  Container,
  Header,
  CitiesList,
  FavoritesTitle,
  FavoritesList,
} from './styles';
import { ModalView } from '../../components/ModalView';
import { WeatherAdd } from '../WeatherAdd';
import { CityProps } from '../../components/City';
import { COLLECTION_CITIES } from '../../config/storage';
import { useEffect } from 'react';
import { OpenWeatherAPI } from '../../services/weather';
import { OPENWEATHER_API_KEY, OPENWEATHER_CDN_URL } from '../../config/weather';
import { convertKevinToCelsius } from '../../lib/tempeature';

export function Home() {
  const navigation = useNavigation();

  const [cities, setCities] = useState([]);
  const [openWeatherAddModal, setOpenWeatherAddModal] = useState(false);

  const favorites = useMemo(() => {
    return cities.filter((city) => city.isFavorite);
  }, [cities]);

  function handleWeatherDetail(city: WeatherProps) {
    navigation.navigate('WeatherDetail', { city });
  }

  function handleOpenWeatherAddModal() {
    setOpenWeatherAddModal(true);
  }

  function handleCloseWeatherAddModal() {
    setOpenWeatherAddModal(false);
  }

  async function loadCities() {
    const response = await AsyncStorage.getItem(COLLECTION_CITIES);
    const storagedCities = response ? JSON.parse(response) : [];

    // Nesse moment vai ser necessário fazer uma request para  API de clima para atualizar os dados do clima..

    setCities(storagedCities);
  }

  async function handleAddCity(city: CityProps) {
    const response = await AsyncStorage.getItem(COLLECTION_CITIES);
    const storagedCities = response ? JSON.parse(response) : [];

    // Neste momento vamos precisar fazer um request para a API de clima, para gravar os dados do clima ...

    let weather = {};

    const { data } = await OpenWeatherAPI.get('/weather', {
      params: {
        q: city.name,
        appid: OPENWEATHER_API_KEY,
      },
    });

    weather = {
      iconUrl: `${OPENWEATHER_CDN_URL}/${data.weather[0].icon}@2x.png`,
      temp: convertKevinToCelsius(data.main.temp),
      temp_min: convertKevinToCelsius(data.main.temp_min),
      temp_max: convertKevinToCelsius(data.main.temp_max),
      lat: data.coord.lat,
      lon: data.coord.lon
    };

    const newCities = [
      ...storagedCities,
      { ...city, ...weather, isFavorite: false },
    ];

    await AsyncStorage.setItem(COLLECTION_CITIES, JSON.stringify(newCities));
    setCities(newCities);
    setOpenWeatherAddModal(false);
  }

  useEffect(() => {
    loadCities();
  }, []);

  console.log('cities', cities)

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd onPress={handleOpenWeatherAddModal} />
      </Header>

      <CitiesList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WeatherCity data={item} onPress={() => handleWeatherDetail(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 50 }}
        ListHeaderComponent={() =>
          !!favorites.length ? (
            <>
              <FavoritesList
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <WeatherFavorite
                    data={item}
                    onPress={() => handleWeatherDetail(item)}
                  />
                )}
                horizontal
                contentContainerStyle={{ paddingLeft: 24, paddingRight: 8 }}
                showsHorizontalScrollIndicator={false}
              />

              <FavoritesTitle>Suas cidades</FavoritesTitle>
            </>
          ) : (
            <></>
          )
        }
      />

      <ButtonAdd onPress={() => AsyncStorage.clear()} />

      <ModalView
        visible={openWeatherAddModal}
        closeModal={handleCloseWeatherAddModal}
      >
        <WeatherAdd onAdd={handleAddCity} />
      </ModalView>
    </Container>
  );
}
