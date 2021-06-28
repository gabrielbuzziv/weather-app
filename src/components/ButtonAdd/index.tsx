import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import { Button } from './styles';
import { theme } from '../../styles/theme';

interface Props extends BorderlessButtonProps {}

export function ButtonAdd({ ...rest }: Props) {
  return (
    <Button {...rest}>
      <MaterialIcons name="add" color={theme.colors.white} size={24} />
    </Button>
  );
}
