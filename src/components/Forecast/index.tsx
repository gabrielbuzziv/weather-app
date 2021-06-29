import React from 'react';
import { View } from 'react-native';
import { WeatherIcon } from '../WeatherIcon';

import { Container, Icon, Info, Temperature, DayOfWeek, Date } from './styles';

interface Props {
  data: [];
}

export function Forecast({ data }: Props) {
  return (
    <Container>
      <Icon colors={['#F0F5FF', '#FFFFFF']}>
        <WeatherIcon iconUrl={data.iconUrl} size="small" />
      </Icon>

      <Info>
        <Temperature>{data.temp}°</Temperature>
        <View>
          <DayOfWeek>Segunda</DayOfWeek>
          <Date>28 junho</Date>
        </View>
      </Info>
    </Container>
  );
}
