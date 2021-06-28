import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, CityName, CountryName, ButtonAdd } from './styles';

export type CityProps = {
  id: string;
  name: string;
  country: string;
}

interface Props extends RectButtonProps {
  data: CityProps;
}

export function City({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CityName>{data.name}</CityName>
      <CountryName>{data.country}</CountryName>
      <ButtonAdd>Adicionar</ButtonAdd>
    </Container>
  );

}