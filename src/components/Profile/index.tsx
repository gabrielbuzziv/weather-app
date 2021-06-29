import React, { useEffect, useState } from 'react';
import { format, getHours, ptBR } from 'date-fns';

import { Container, Greeting, Day } from './styles';

export function Profile() {
  const [greeting, setGreeting] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const currentHour = getHours(now);
    const dateFormatted = format(now, "E, dd 'de' MMMM", { locale: ptBR });

    setDate(`${dateFormatted.charAt(0).toUpperCase()}${dateFormatted.slice(1)}`);

    if (currentHour > 6 && currentHour < 12) {
      setGreeting('Bom dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde');
    } else {
      setGreeting('Boa noite');
    }
  }, []);

  return (
    <Container>
      <Greeting>{greeting}</Greeting>
      <Day>{date}</Day>
    </Container>
  );
}
