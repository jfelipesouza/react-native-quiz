import { createStackNavigator } from '@react-navigation/stack';
import type { StackNavigationOptions } from '@react-navigation/stack';

import { HomeScreen } from '@screens/home';
import { QuestionScreen } from '@screens/single/questions';
import { SingleRouters } from './types/stack/single';

const { Navigator, Screen } = createStackNavigator<SingleRouters>();

const SCREEN_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

export const StackRouters = () => {
  return (
    <Navigator screenOptions={SCREEN_OPTIONS}>
      <Screen name={'home'} component={HomeScreen} />
      <Screen name={'single'} component={QuestionScreen} />
    </Navigator>
  );
};
