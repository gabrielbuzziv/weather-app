import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  height: 180px;
  background-color: ${theme.colors.blue20};
  margin-right: 16px;
  padding: 24px;
  border-radius: 15px;
  width: 210px;
`;

export const Status = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const CityName = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-family: ${theme.fonts.subtitle};
`;

export const Temperature = styled.Text`
  color: ${theme.colors.heading};
  font-size: 34px;
  font-family: ${theme.fonts.title};
`;

export const InfoContainer = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 15px;
  height: 60px;
  padding: 0 16px;
  margin-top: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View``;

export const InfoTemperature = styled.Text`
  color: ${theme.colors.heading};
  font-size: 16px;
  font-family: ${theme.fonts.title};
`;

export const InfoLabel = styled.Text`
  color: ${theme.colors.text};
  font-size: 10px;
  font-family: ${theme.fonts.text};
`;
