import './theme/unistyles';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRouters } from './routes';

export const MyApp: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
};
