import React, { useState, useEffect, useMemo } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  useNavigation, useRoute, RouteProp, ParamListBase,
} from '@react-navigation/native';

import { ButtonFavorite } from '../../components/ButtonFavorite';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Forecast, ForecastProps } from '../../components/Forecast';
import { WeatherCityProps } from '../../components/WeatherCity';
import { WeatherIcon } from '../../components/WeatherIcon';
import { useCities } from '../../hooks/cities';
import { convertCelsiusToFahrenheit } from '../../lib/tempeature';
import { getForecastsByCity } from '../../services/weather';
import { theme } from '../../styles/theme';
import {
  Container,
  Header,
  Title,
  Subtitle,
  CurrentWeather,
  Temperature,
  ContentShadow,
  Content,
  ListTitle,
  ForecastList,
  Loading,
  ButtonRemove,
  ButtonRemoveText,
} from './styles';

interface RouteParamsData extends RouteProp<ParamListBase, string> {
  params: {
    city: WeatherCityProps
  }
}

export function WeatherDetail() {
  const { measure, toggleFavorite, removeCity } = useCities();
  const navigation = useNavigation();
  const route = useRoute<RouteParamsData>();
  const { city } = route.params;

  const { blue20, blue60 } = theme.colors;

  const [forecasts, setForecasts] = useState<ForecastProps[]>(
    [] as ForecastProps[],
  );
  const [loading, setLoading] = useState(true);

  const temperature = useMemo(() => (measure === 'celsius' ? city.temp : convertCelsiusToFahrenheit(city.temp)), [measure, city]);

  function handleBack() {
    navigation.goBack();
  }

  async function handleRemoveCity() {
    await removeCity(city);
    navigation.navigate('Home');
  }

  async function handleToggleFavorite() {
    toggleFavorite(city);
  }

  async function fetchForecasts() {
    try {
      const forecastsData = await getForecastsByCity(city.lat, city.lon);
      setForecasts(forecastsData);
    } catch (err) {
      setForecasts([] as ForecastProps[]);
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
        <ButtonFavorite
          isFavorite={city.isFavorite}
          onPress={handleToggleFavorite}
        />
      </Header>

      <Subtitle>Clima Hoje</Subtitle>

      <CurrentWeather>
        <WeatherIcon iconUrl={city.iconUrl} size="largest" />
        <Temperature>
          {temperature}
          °
        </Temperature>
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

      <ButtonRemove onPress={handleRemoveCity}>
        <MaterialCommunityIcons
          name="trash-can"
          size={20}
          color={theme.colors.white}
        />

        <ButtonRemoveText>Remover</ButtonRemoveText>
      </ButtonRemove>
    </Container>
  );
}
