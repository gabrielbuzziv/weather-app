import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { theme } from '../../styles/theme';

export function Loading({ ...rest }: ActivityIndicatorProps) {
  return (
    <ActivityIndicator size="small" color={theme.colors.heading} {...rest} />
  );
}
