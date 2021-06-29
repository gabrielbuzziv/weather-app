import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
`;

export const Icon = styled(LinearGradient)`
  height: 60px;
  width: 60px;
  margin-right: 16px;
  
  border-radius: 30px;
  
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  border-width: 1px;
  border-color: #EBEDF0;
  padding: 16px 24px;
  border-radius: 30px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const Temperature = styled.Text`
  color: ${theme.colors.heading};
  font-size: 30px;
  font-family: ${theme.fonts.title};
`;

export const DayOfWeek = styled.Text`
  color: ${theme.colors.heading};
  font-size: 12px;
  font-family: ${theme.fonts.medium};
  text-transform: capitalize;
`;

export const Date = styled.Text`
  color: ${theme.colors.text};
  font-size: 12px;
  font-family: ${theme.fonts.text};
`;
