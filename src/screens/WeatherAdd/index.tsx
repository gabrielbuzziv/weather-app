import React from 'react';
import { City } from '../../components/City';

import { Container, Input, SearchList } from './styles';

export function WeatherAdd() {

  const cities = [
    {
      id: '1',
      name: 'Blumenau',
      country: 'Brasil'
    }
  ]

  return (
    <Container>
      <Input
        placeholder="Digite o nome da cidade que deseja"
        autoCompleteType="off"
        autoFocus
      />

      <SearchList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <City data={item} />}
      />

    </Container>
  );
}