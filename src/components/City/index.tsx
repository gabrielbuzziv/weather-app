import React from 'react';
import { Alert, TouchableOpacityProps } from 'react-native';

import { Container, CityName, CountryName, ButtonAdd } from './styles';

export type CityProps = {
  id: string;
  name: string;
  country: string;
};

interface Props extends TouchableOpacityProps {
  data: CityProps;
}

export function City({ data, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <CityName>{data.name}</CityName>
      <CountryName>{data.country}</CountryName>
      <ButtonAdd>Adicionar</ButtonAdd>
    </Container>
  );
}
