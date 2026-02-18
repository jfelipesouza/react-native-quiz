import { StyleSheet } from 'react-native-unistyles';

import {
  AppBreakpoints,
  appThemes,
  AppThemes,
  breakpoints,
} from '@themes/config';

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: appThemes,
  breakpoints: breakpoints,
  settings: {
    adaptiveThemes: false,
    initialTheme: 'light',
  },
});
