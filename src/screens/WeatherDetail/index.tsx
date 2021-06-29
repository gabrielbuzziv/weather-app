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
  Loading
} from './styles';
import { useEffect } from 'react';
import { OPENWEATHER_API_KEY, OPENWEATHER_CDN_URL } from '../../config/weather';
import { OpenWeatherAPI } from '../../services/weather';
import { convertKevinToCelsius } from '../../lib/tempeature';
import { Forecast } from '../../components/Forecast';


export function WeatherDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { city } = route.params;

  const { blue20, blue60 } = theme.colors;

  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleBack() {
    navigation.goBack();
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

      setForecasts(
        daily.map((day) => {
          return {
            id: day.dt,
            temp: convertKevinToCelsius(day.temp.day),
            date: day.dt,
            iconUrl: `${OPENWEATHER_CDN_URL}/${day.weather[0].icon}@2x.png`,
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
        <ButtonFavorite isFavorite={false} onPress={() => {}} />
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
