import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Weather, WeatherProps } from '../../components/Weather';
import { Favorite } from '../../components/Favorite';

import {
  Container,
  Header,
  WeatherList,
  FavoritesTitle,
  FavoritesList,
} from './styles';
import { ModalView } from '../../components/ModalView';
import { WeatherAdd } from '../WeatherAdd';

export function Home() {
  const navigation = useNavigation();

  const [openWeatherAddModal, setOpenWeatherAddModal] = useState(false);

  const weathers = [
    {
      id: '1',
      name: 'Blumenau',
      temp: 22,
      temp_min: 14,
      temp_max: 23,
    },
    {
      id: '2',
      name: 'Rio do Sul',
      temp: 22,
      temp_min: 14,
      temp_max: 23,
    },
  ];

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
            <WeatherList
              data={weathers}
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
        <WeatherAdd />
      </ModalView>
    </Container>
  );
}
