import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { WeatherCity, WeatherCityProps } from '../../components/WeatherCity';
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
import { useCities } from '../../hooks/cities';

export function Home() {
  const navigation = useNavigation();
  const { unfavorites: cities, favorites, addCity } = useCities();

  const [openWeatherAddModal, setOpenWeatherAddModal] = useState(false);

  function handleWeatherDetail(city: WeatherCityProps) {
    navigation.navigate('WeatherDetail', { city });
  }

  function handleOpenWeatherAddModal() {
    setOpenWeatherAddModal(true);
  }

  function handleCloseWeatherAddModal() {
    setOpenWeatherAddModal(false);
  }

  async function handleAddCity(city: CityProps) {
    addCity(city);
    setOpenWeatherAddModal(false);
  }

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
        ListFooterComponent={() =>
          !cities.length ? (
            <EmptyCities>
              <EmptyCitiesTitle></EmptyCitiesTitle>
              <EmptyCitiesText></EmptyCitiesText>
            </EmptyCities>
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
