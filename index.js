/**
 * @format
 */

import 'react-native-gesture-handler';
import './unistyles';

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import { MyApp } from './src';

AppRegistry.registerComponent(appName, () => MyApp);
