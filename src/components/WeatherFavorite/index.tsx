import React, { useMemo } from 'react';
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
  iconUrl: string;
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
import { useCities } from '../../hooks/cities';
import { convertCelsiusToFahrenheit } from '../../lib/tempeature';

export function WeatherFavorite({ data, ...rest }: Props) {
  const { measure } = useCities();

  const temperature = useMemo(() => {
    return measure === 'celsius'
      ? data.temp
      : convertCelsiusToFahrenheit(data.temp);
  }, [measure, data]);

  const temperatureMin = useMemo(() => {
    return measure === 'celsius'
      ? data.temp_min
      : convertCelsiusToFahrenheit(data.temp_min);
  }, [measure, data]);

  const temperatureMax = useMemo(() => {
    return measure === 'celsius'
      ? data.temp_max
      : convertCelsiusToFahrenheit(data.temp_max);
  }, [measure, data]);

  return (
    <Container {...rest}>
      <Status>
        <View>
          <CityName>{data.name}</CityName>
          <Temperature>{temperature}°</Temperature>
        </View>

        <WeatherIcon iconUrl={data.iconUrl} size="small" />
      </Status>

      <InfoContainer>
        <View>
          <InfoTemperature>{temperatureMin}°</InfoTemperature>
          <InfoLabel>Min.</InfoLabel>
        </View>

        <View>
          <InfoTemperature>{temperatureMax}°</InfoTemperature>
          <InfoLabel>Máx.</InfoLabel>
        </View>
      </InfoContainer>
    </Container>
  );
}
