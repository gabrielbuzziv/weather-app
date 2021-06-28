import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`

`;

export const Greeting = styled.Text`
  color: ${theme.colors.heading};
  font-size: 24px;
  font-family: ${theme.fonts.title};
`;

export const Date = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-family: ${theme.fonts.text};
`;