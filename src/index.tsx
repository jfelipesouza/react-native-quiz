import './theme/unistyles';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRouters } from './routes';

import { UnistylesProvider } from 'react-native-unistyles';

export const MyApp = () => {
  return (
    <UnistylesProvider>
      <NavigationContainer>
        <StackRouters />
      </NavigationContainer>
    </UnistylesProvider>
  );
};
