import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  background: ${theme.colors.white};
  border-width: 1px;
  border-color: ${theme.colors.input};
  border-radius: 15px;

  height: 50px;
  padding: 0 16px;

  position: absolute;
  right: 24px;
  bottom: 24px;

  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-family: ${theme.fonts.text};
`;