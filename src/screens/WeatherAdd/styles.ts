import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { CityProps } from '../../components/City';
import { Loading as LoadingComponent } from '../../components/Loading';

import { theme } from '../../styles/theme';

export const Container = styled.ScrollView`
  min-height: 500px;
  max-height: 500px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 15px;
  border-color: ${theme.colors.input};
  height: 50px;

  font-family: ${theme.fonts.text};
  color: ${theme.colors.text};
  font-size: 16px;

  padding: 0 16px;
  margin-bottom: 24px;
`;

export const SearchList = styled(FlatList as new () => FlatList<CityProps>)`

`

export const Loading = styled(LoadingComponent)`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`