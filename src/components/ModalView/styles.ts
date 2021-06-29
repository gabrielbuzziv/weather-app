import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  flex: 1;
  justify-content: flex-end;
`;

export const Container = styled.View`
  background-color: ${theme.colors.white};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 16px;
`;

export const Bar = styled.View`
  background-color: ${theme.colors.blue20};
  border-radius: 2px;
  height: 4px;
  width: 40px;
  align-self: center;
  margin-bottom: 24px;
`;
