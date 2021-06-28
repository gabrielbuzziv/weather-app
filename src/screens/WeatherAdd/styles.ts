import styled from 'styled-components/native';
import { FlatListProps } from 'react-native';

import { theme } from '../../styles/theme';

export const Container = styled.View`
  min-height: 500px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 15px;
  border-color: ${theme.colors.input};
  height: 50px;
  padding: 0 16px;

  font-family: ${theme.fonts.text};
  color: ${theme.colors.text};
  font-size: 16px;
`;

export const SearchList = styled.FlatList<FlatListProps<any>>`

`