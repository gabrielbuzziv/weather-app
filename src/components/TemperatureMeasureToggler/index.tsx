import React from 'react';
import { Switch } from 'react-native';
import { useCities } from '../../hooks/cities';

import { Container, Label } from './styles';

export function TemperatureMeasureToggler() {
  const { measure, toggleMeasure } = useCities();
  const isCelsius = measure !== 'celsius';

  return (
    <Container>
      <Label>°C</Label>
      <Switch value={isCelsius} onChange={toggleMeasure} />
      <Label>°F</Label>
    </Container>
  );
}
