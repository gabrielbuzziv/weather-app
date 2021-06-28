import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { View } from 'react-native';

import { WeatherIcon } from '../WeatherIcon';
import { ButtonFavorite } from '../ButtonFavorite';

export type WeatherProps = {
  id: string;
  name: string;
  temp: number;
  temp_min: number;
  temp_max: number;
};

interface Props extends RectButtonProps {
  data: WeatherProps;
}

import {
  Container,
  Status,
  CityName,
  Temperature,
  InfoContainer,
  InfoTemperature,
  InfoLabel,
} from './styles';

export function WeatherFavorite({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Status>
        <View>
          <CityName>{data.name}</CityName>
          <Temperature>{data.temp}°</Temperature>
        </View>

        <WeatherIcon />
      </Status>

      <InfoContainer>
        <View>
          <InfoTemperature>{data.temp_min}°</InfoTemperature>
          <InfoLabel>Min.</InfoLabel>
        </View>

        <View>
          <InfoTemperature>{data.temp_max}°</InfoTemperature>
          <InfoLabel>Máx.</InfoLabel>
        </View>

        <ButtonFavorite />
      </InfoContainer>
    </Container>
  );
}
