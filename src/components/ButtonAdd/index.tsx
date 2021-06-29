import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

import { theme } from '../../styles/theme';
import { Button } from './styles';

type Props = BorderlessButtonProps

export function ButtonAdd({ ...rest }: Props) {
  return (
    <Button {...rest}>
      <MaterialIcons name="add" color={theme.colors.white} size={24} />
    </Button>
  );
}
