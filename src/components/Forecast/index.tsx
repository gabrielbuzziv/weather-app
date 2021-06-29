import React, { useMemo } from 'react';
import { View } from 'react-native';

import { useCities } from '../../hooks/cities';
import { convertCelsiusToFahrenheit } from '../../lib/tempeature';
import { WeatherIcon } from '../WeatherIcon';
import {
  Container, Icon, Info, Temperature, DayOfWeek, Date,
} from './styles';

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
  const { measure } = useCities();

  const temperature = useMemo(() => (measure === 'celsius' ? data.temp : convertCelsiusToFahrenheit(data.temp)), [measure, data]);

  return (
    <Container>
      <Icon colors={['#F0F5FF', '#FFFFFF']}>
        <WeatherIcon iconUrl={data.iconUrl} size="small" />
      </Icon>

      <Info>
        <Temperature>
          {temperature}
          °
        </Temperature>
        <View>
          <DayOfWeek>{data.dayOfWeek}</DayOfWeek>
          <Date>{data.date}</Date>
        </View>
      </Info>
    </Container>
  );
}
