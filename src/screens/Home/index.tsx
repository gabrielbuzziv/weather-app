import React from 'react';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Weather } from '../../components/Weather';
import { Favorite } from '../../components/Favorite';

import {
  Container,
  Header,
  WeatherList,
  FavoritesTitle,
  FavoritesList,
} from './styles';

export function Home() {
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

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd
          onPress={() => {
            console.log('something');
          }}
        />
      </Header>

      <FavoritesList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Favorite data={item} />}
        contentContainerStyle={{ paddingBottom: 50 }}
        ListHeaderComponent={() => (
          <>
            <WeatherList
              data={weathers}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Weather data={item} />}
              horizontal
              contentContainerStyle={{ paddingLeft: 24, paddingRight: 8 }}
              showsHorizontalScrollIndicator={false}
            />

            <FavoritesTitle>Seus favoritos</FavoritesTitle>
          </>
        )}
      />
    </Container>
  );
}
