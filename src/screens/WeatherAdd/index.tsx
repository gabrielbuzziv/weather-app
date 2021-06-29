import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { City, CityProps } from '../../components/City';
import { useDebounce } from '../../hooks/useDebounce';
import { PlacesAPI } from '../../services/places';

import {
  Container, Input, SearchList, Loading,
} from './styles';

const { GOOGLE_PLACES_API_KEY } = process.env;

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
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<CityProps[]>([] as CityProps[]);
  const queryTerm = useDebounce(query, 300);

  async function fetchPlaces() {
    try {
      setLoading(true);
      const response = await PlacesAPI.get('/textsearch/json', {
        params: {
          query: queryTerm,
          region: '.br',
          type: 'locality',
          key: GOOGLE_PLACES_API_KEY,
          language: 'pt-BR',
        },
      });

      const { results } = response.data;

      setCities(
        results.map((city: Place) => ({
          id: city.place_id,
          name: city.name,
          country: city.formatted_address.split(', ').pop(),
        })),
      );
    } catch (err) {
      Alert.alert(
        'Ops, não foi possível carregar os dados da API, tente novamente mais tarde.',
      );
      setCities([] as CityProps[]);
    } finally {
      setLoading(false);
    }
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

      {loading ? (
        <Loading />
      ) : (
        <SearchList
          data={cities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <City data={item} onPress={() => onAdd(item)} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
