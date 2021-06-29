import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import { theme } from '../../styles/theme';

export const Container = styled(RectButton)`
  background-color: ${theme.colors.blue20};
  border-radius: 15px;

  padding: 32px;
  margin: 0 24px 16px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CityName = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-family: ${theme.fonts.subtitle};
`;

export const Temperature = styled.Text`
  color: ${theme.colors.heading};
  font-size: 50px;
  font-family: ${theme.fonts.title};
`;
