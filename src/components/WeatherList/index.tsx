import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Weather, WeatherProps } from '../Weather';

import { Container } from './styles';

export function WeatherList() {
  const [weathers, setWeathers] = useState<WeatherProps[]>([
    {
      id: '1',
      name: 'Blumenau',
      temp: 22,
      temp_min: 14,
      temp_max: 23,
    },
    {
      id: '2',
      name: 'Rio do Sul',
      temp: 22,
      temp_min: 14,
      temp_max: 23,
    },
  ] as WeatherProps[]);

  console.log(weathers)

  return (
    <FlatList
      data={weathers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Weather data={item} />}
      horizontal
      style={{ width: '100%' }}
      contentContainerStyle={{ paddingLeft: 24, paddingRight: 8, }}
    />
  );
}
