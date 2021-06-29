import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { WeatherDetail } from '../screens/WeatherDetail';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
      >
        <Screen name="Home" component={Home} />
        <Screen name="WeatherDetail" component={WeatherDetail} />
      </Navigator>
    </NavigationContainer>
  );
}
