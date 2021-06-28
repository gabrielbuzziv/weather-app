import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Weather, WeatherProps } from '../../components/Weather';
import { Favorite } from '../../components/Favorite';

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
import { OPENWEATHER_API_KEY } from '../../config/weather';

export function Home() {
  const navigation = useNavigation();

  const [cities, setCities] = useState([]);
  const [openWeatherAddModal, setOpenWeatherAddModal] = useState(false);

  const favorites = [
    {
      id: '1',
      name: 'Joinvile',
      temp: 22,
    },
    {
      id: '2',
      name: 'São Paulo',
      temp: 26,
    },
  ];

  function handleWeatherDetail(weather: WeatherProps) {
    navigation.navigate('WeatherDetail', { weather });
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

    try {
      const response = await OpenWeatherAPI.get('/weather', {
        params: {
          q: city.name,
          appid: OPENWEATHER_API_KEY
        }
      })

      console.log(response.data)
    } catch (err) {

    }


    const newCities = [...storagedCities, { ...city, isFavorite: false }];

    await AsyncStorage.setItem(COLLECTION_CITIES, JSON.stringify(newCities));
    setCities(newCities);
    setOpenWeatherAddModal(false);
  }

  useEffect(() => {
    loadCities();
  }, []);

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd onPress={handleOpenWeatherAddModal} />
      </Header>

      <FavoritesList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Favorite data={item} onPress={() => handleWeatherDetail(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 50 }}
        ListHeaderComponent={() => (
          <>
            <CitiesList
              data={cities}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Weather
                  data={item}
                  onPress={() => handleWeatherDetail(item)}
                />
              )}
              horizontal
              contentContainerStyle={{ paddingLeft: 24, paddingRight: 8 }}
              showsHorizontalScrollIndicator={false}
            />

            <FavoritesTitle>Seus favoritos</FavoritesTitle>
          </>
        )}
      />

      <ModalView
        visible={openWeatherAddModal}
        closeModal={handleCloseWeatherAddModal}
      >
        <WeatherAdd onAdd={handleAddCity} />
      </ModalView>
    </Container>
  );
}
