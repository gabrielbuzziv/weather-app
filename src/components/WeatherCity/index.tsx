import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { WeatherIcon } from '../WeatherIcon';

import { Container, CityName, Temperature } from './styles';

export type WeatherCityProps = {
  id: string;
  name: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  iconUrl: string;
  isFavorite?: boolean;
  lastUpdate: number;
};

interface Props extends RectButtonProps {
  data: WeatherCityProps;
}

export function WeatherCity({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <View>
        <CityName>{data.name}</CityName>
        <Temperature>{data.temp}°</Temperature>
      </View>

      <WeatherIcon iconUrl={data.iconUrl} size="large" />
    </Container>
  );
}
