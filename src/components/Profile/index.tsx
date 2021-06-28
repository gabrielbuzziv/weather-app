import React from 'react';
import { View, Text } from 'react-native';

import { Container, Greeting, Date } from './styles';

export function Profile() {
  return (
    <Container>
      <Greeting>Bom dia</Greeting>
      <Date>Segunda feira, 28 de junho</Date>
    </Container>
  );
}