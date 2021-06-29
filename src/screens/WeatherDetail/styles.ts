import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';
import { Loading as LoadingComponent } from '../../components/Loading';

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + 30}px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  color: ${theme.colors.white};
  font-size: 30px;
  font-family: ${theme.fonts.title};
  flex: 1;
  text-align: center;
  margin-top: -7px;
`;

export const Subtitle = styled.Text`
  color: ${theme.colors.white};
  font-size: 16px;
  font-family: ${theme.fonts.text};
  text-align: center;
  margin-bottom: 16px;
`;


export const CurrentWeather = styled.View`
  flex-direction: row;
  margin: 0 48px 32px;
  align-items: center;
  justify-content: space-around;
`;

export const Temperature = styled.Text`
  font-size: 80px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title};
`;

export const ContentShadow = styled.View`
  background: ${theme.colors.blue20};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 16px;
  margin: 0 40px;
`;

export const Content = styled.View`
  background: ${theme.colors.white};
  border-radius: 15px;
  padding: 24px;
  margin: 0 24px 16px;
  flex: 1;
`;

export const ListTitle = styled.Text`
  color: ${theme.colors.heading};
  font-size: 16px;
  font-family: ${theme.fonts.subtitle};
  margin-bottom: 16px;
`;

export const ForecastList = styled.FlatList``;

export const Loading = styled(LoadingComponent)`
  justify-content: center;
  flex: 1;
  align-items: center;
`;

export const ButtonRemove = styled(RectButton)`
  background-color: ${theme.colors.red};
  border-radius: 15px;
  
  height: 50px;
  margin: 0 24px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonRemoveText = styled.Text`
  color: ${theme.colors.white};
  font-size: 16px;
  font-family: ${theme.fonts.medium};
  margin-left: 16px;
`;