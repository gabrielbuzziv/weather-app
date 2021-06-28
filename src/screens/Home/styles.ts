import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';
import { FlatListProps } from 'react-native';
import { WeatherProps } from '../../components/Weather';

export const Container = styled.View`
  background: ${theme.colors.white};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + 24}px;
  margin-bottom: 40px;
`;

export const CitiesList = styled.FlatList<FlatListProps<WeatherProps>>`
  min-height: 180px;
  max-height: 180px;
  margin-bottom: 24px;
`;

export const FavoritesTitle = styled.Text`
  color: ${theme.colors.heading};
  font-size: 18px;
  font-family: ${theme.fonts.subtitle};
  margin: 0 24px 24px;
`;

export const FavoritesList = styled.FlatList<FlatListProps<any>>`
`;