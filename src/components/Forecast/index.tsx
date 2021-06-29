import React from 'react';
import { View } from 'react-native';
import { WeatherIcon } from '../WeatherIcon';

import { Container, Icon, Info, Temperature, DayOfWeek, Date } from './styles';

export type ForecastProps = {
  id: string;
  iconUrl: string;
  temp: number;
  dayOfWeek: string;
  date: string;
}
interface Props {
  data: ForecastProps;
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
          <DayOfWeek>{data.dayOfWeek}</DayOfWeek>
          <Date>{data.date}</Date>
        </View>
      </Info>
    </Container>
  );
}
