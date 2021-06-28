import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { WeatherIcon } from '../WeatherIcon';

import { Container, CityName, Temperature } from './styles';

export type FavoriteProps = {
  id: string;
  name: string;
  temp: number;
};

interface Props extends RectButtonProps {
  data: FavoriteProps;
}

export function WeatherCity({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <View>
        <CityName>{data.name}</CityName>
        <Temperature>{data.temp}</Temperature>
      </View>

      <WeatherIcon />
    </Container>
  );
}
