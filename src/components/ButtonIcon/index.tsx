import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Button } from './styles';
import { theme } from '../../styles/theme';

interface Props extends BorderlessButtonProps {
  iconName: 'chevron-left'
}

export function ButtonIcon({ iconName, ...rest }: Props) {
  return (
    <Button {...rest}>
      <MaterialCommunityIcons name={iconName} size={30} color={theme.colors.white} />
    </Button>
  );
}
