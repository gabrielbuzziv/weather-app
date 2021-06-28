import React from 'react';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { WeatherList } from '../../components/WeatherList';

import { Container, Header } from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd onPress={() => { console.log('something') }} />
      </Header>

      {/* CitiesList */}
      <WeatherList />

      {/* FavoritesCities */}





    </Container>
  );
}