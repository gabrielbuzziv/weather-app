import React, { useEffect, useState } from 'react';
import { getHours } from 'date-fns';

import { Container, Greeting, Date } from './styles';

export function Profile() {
  const [greeting, setGreeting] = useState('Bom dia');

  return (
    <Container>
      <Greeting>{greeting}</Greeting>
      <Date>Segunda feira, 28 de junho</Date>
    </Container>
  );
}