import React from 'react';

import CloudImg from '../../assets/cloud.png';

import { Image } from './styles';

export function WeatherIcon() {
  return (
    <Image source={CloudImg} resizeMode="stretch"  />
  );
}