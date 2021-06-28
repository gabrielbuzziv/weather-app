import React from 'react';
import { View } from 'react-native';

export type WeatherProps = {
  id: string;
  name: string;
  temp: number;
  temp_min: number;
  temp_max: number;
};

interface Props {
  data: WeatherProps;
}

import {
  Container,
  Status,
  CityName,
  Temperature,
  InfoContainer,
  Info,
  InfoTemperature,
  InfoLabel,
} from './styles';

export function Weather({ data }: Props) {
  return (
    <Container>
      <Status>
        <View>
          <CityName>{data.name}</CityName>
          <Temperature>{data.temp}</Temperature>
        </View>
      </Status>

      <InfoContainer>
        <Info>
          <InfoTemperature>{data.temp_min}</InfoTemperature>
          <InfoLabel>Min.</InfoLabel>
        </Info>

        <Info>
          <InfoTemperature>{data.temp_max}</InfoTemperature>
          <InfoLabel>Máx.</InfoLabel>
        </Info>
      </InfoContainer>
    </Container>
  );
}
