import React from 'react';

import { Image } from './styles';

interface Props {
  iconUrl: string;
  size: 'largest' | 'large' | 'small';
}

export function WeatherIcon({ iconUrl, size = 'small' }: Props) {
  return <Image source={{ uri: iconUrl }} resizeMode="stretch" size={size} />;
}
