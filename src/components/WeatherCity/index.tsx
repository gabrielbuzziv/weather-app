import React, { useMemo } from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useCities } from '../../hooks/cities';
import { convertCelsiusToFahrenheit } from '../../lib/tempeature';
import { WeatherIcon } from '../WeatherIcon';

import { Container, CityName, Temperature } from './styles';

export type WeatherCityProps = {
  id: string;
  name: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  iconUrl: string;
  isFavorite: boolean;
  lastUpdate: number;
  lat: number;
  lon: number;
};

interface Props extends RectButtonProps {
  data: WeatherCityProps;
}

export function WeatherCity({ data, ...rest }: Props) {
  const { measure } = useCities();

  const temperature = useMemo(() => (measure === 'celsius' ? data.temp : convertCelsiusToFahrenheit(data.temp)), [measure, data]);

  return (
    <Container {...rest}>
      <View>
        <CityName>{data.name}</CityName>
        <Temperature>
          {temperature}
          °
        </Temperature>
      </View>

      <WeatherIcon iconUrl={data.iconUrl} size="large" />
    </Container>
  );
}
