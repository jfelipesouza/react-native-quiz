import type {Breakpoints} from './types/Breakpoints';

import {StyleSheet} from 'react-native-unistyles';

import {darkColors, lightColors} from './colors';
import {breakpoints} from './sizes/breakpoints';
import {metrics} from './sizes/metrics';

const lightTheme = {colors: lightColors, metrics};
const darkTheme = {colors: darkColors, metrics};

export type AppTheme = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppTheme {}

  export interface UnistylesBreakpoints extends Breakpoints {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
});
