import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../styles/theme';

export const Container = styled(RectButton)`
  background-color: ${theme.colors.blue10};
  border-radius: 15px;
  border-width: 1px;
  border-color: #EBF3FF;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04); */
  elevation: 1;
  shadowColor: #000;
  shadowOffset: { width: 0, height: 2 };
  shadowOpacity: 0.04;
  shadowRadius: 2;

  padding: 24px;
  margin-bottom: 16px;
`;

export const CityName = styled.Text`
  color: ${theme.colors.heading};
  font-size: 18px;
  font-family: ${theme.fonts.subtitle};
`;

export const CountryName = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-family: ${theme.fonts.text};
  margin-bottom: 16px;
`;

export const ButtonAdd = styled.Text`
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title};
  font-size: 14px;
  text-transform: uppercase;
`;