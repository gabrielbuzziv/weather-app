import React from 'react';

import RobotImg from '../../assets/robot.png';
import { Container, Icon, Title, Text } from './styles';

export function EmptyCities() {
  return (
    <Container>
      <Icon source={RobotImg} />
      <Title>Está muito vazio por aqui</Title>
      <Text>Que tal adicionar algumas cidades para você ficar por dentro do clima?</Text>
      <Text>Use o botão "+" para adicionar uma cidade.</Text>
    </Container>
  );
}