import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;

  margin: 0 48px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  font-size: 20px;
  font-family: ${theme.fonts.title};
  margin-bottom: 8px;
  text-align: center;
`;

export const Text = styled.Text`
  color: ${theme.colors.text};
  font-size: 16px;
  font-family: ${theme.fonts.text};
  text-align: center;

  margin-bottom: 16px;
`;

export const Icon = styled.Image`
  height: 120px;
  width: 120px;
  margin-bottom: 24px;
`;
