import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../styles/theme';
import { ButtonFavorite } from '../../components/ButtonFavorite';
import { WeatherIcon } from '../../components/WeatherIcon';

import {
  Container,
  Header,
  Title,
  CurrentWeather,
  Temperature,
  ContentShadow,
  Content,
  ListTitle,
  ForecastList,
  Loading,
} from './styles';
import { useEffect } from 'react';
import { OPENWEATHER_API_KEY, OPENWEATHER_CDN_URL } from '../../config/weather';
import { OpenWeatherAPI } from '../../services/weather';
import { convertKevinToCelsius } from '../../lib/tempeature';
import { Forecast, ForecastProps } from '../../components/Forecast';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_CITIES } from '../../config/storage';
import { useCities } from '../../hooks/cities';

export function WeatherDetail() {
  const { toggleFavorite } = useCities()
  const navigation = useNavigation();
  const route = useRoute();
  const { city } = route.params;

  const { blue20, blue60 } = theme.colors;

  const [forecasts, setForecasts] = useState<ForecastProps[]>(
    [] as ForecastProps[]
  );
  const [loading, setLoading] = useState(true);

  function handleBack() {
    navigation.goBack();
  }

  async function handleToggleFavorite() {
    toggleFavorite(city);
  }

  async function fetchForecasts() {
    try {
      const { data } = await OpenWeatherAPI.get('/onecall', {
        params: {
          appid: OPENWEATHER_API_KEY,
          lat: city.lat,
          lon: city.lon,
        },
      });

      const { daily } = data;
      daily.shift();

      setForecasts(
        daily.map((day) => {
          return {
            id: String(day.dt),
            temp: convertKevinToCelsius(day.temp.day),
            iconUrl: `${OPENWEATHER_CDN_URL}/${day.weather[0].icon}@2x.png`,
            dayOfWeek: format(new Date(day.dt * 1000), 'E', { locale: ptBR }),
            date: format(new Date(day.dt * 1000), 'dd MMMM', { locale: ptBR }),
          };
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchForecasts();
  }, []);

  return (
    <Container colors={[blue20, blue60]}>
      <Header>
        <ButtonIcon iconName="chevron-left" onPress={handleBack} />
        <Title>{city.name}</Title>
        <ButtonFavorite isFavorite={city.isFavorite} onPress={handleToggleFavorite} />
      </Header>

      <CurrentWeather>
        <WeatherIcon iconUrl={city.iconUrl} size="largest" />
        <Temperature>{city.temp}°</Temperature>
      </CurrentWeather>

      <ContentShadow />
      <Content>
        <ListTitle>Previsão da semana</ListTitle>

        {loading ? (
          <Loading />
        ) : (
          <ForecastList
            data={forecasts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Forecast data={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Content>
    </Container>
  );
}
