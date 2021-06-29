import React, { useState } from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Button } from './styles';
import { theme } from '../../styles/theme';

interface Props extends TouchableWithoutFeedbackProps {
  isFavorite: boolean;
  onPress: () => void;
}

export function ButtonFavorite({
  isFavorite = false,
  onPress,
  ...rest
}: Props) {
  const [isFilled, setIsFilled] = useState<boolean>(isFavorite);

  function handleToggle() {
    setIsFilled(!isFilled);
    onPress();
  }

  return (
    <Button {...rest} onPress={handleToggle}>
      <MaterialCommunityIcons
        name={isFilled ? 'heart' : 'heart-outline'}
        color={isFilled ? theme.colors.red : theme.colors.white}
        size={24}
      />
    </Button>
  );
}
