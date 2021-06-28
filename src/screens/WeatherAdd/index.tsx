import React, { useState } from 'react';
import { useEffect } from 'react';
import { City, CityProps } from '../../components/City';
import { GOOGLE_API_KEY } from '../../config/places';
import { useDebounce } from '../../hooks/useDebounce';
import { PlacesAPI } from '../../services/places';

import { Container, Input, SearchList } from './styles';

type Place = {
  place_id: string;
  name: string;
  formatted_address: string;
};

interface Props {
  onAdd: (city: CityProps) => void;
}

export function WeatherAdd({ onAdd }: Props) {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState<CityProps[]>([] as CityProps[]);
  const queryTerm = useDebounce(query, 300);

  async function fetchPlaces() {
    try {
      const response = await PlacesAPI.get('/textsearch/json', {
        params: {
          query: queryTerm,
          region: '.br',
          type: 'locality',
          key: GOOGLE_API_KEY,
          language: 'pt-BR',
        },
      });

      const { results } = response.data;

      setCities(
        results.map((city: Place) => {
          return {
            id: city.place_id,
            name: city.name,
            country: city.formatted_address.split(', ').pop(),
          };
        })
      );
    } catch (err) {}
  }

  useEffect(() => {
    fetchPlaces();
  }, [queryTerm]);

  return (
    <Container>
      <Input
        placeholder="Digite o nome da cidade que deseja"
        autoCompleteType="off"
        autoFocus
        value={query}
        onChangeText={setQuery}
      />

      <SearchList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <City data={item} onPress={() => onAdd(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
