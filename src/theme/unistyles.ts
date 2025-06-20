import { UnistylesRegistry } from 'react-native-unistyles';

import { darkColors, lightColors } from './colors';
import { breakpoints } from './sizes/breakpoints';
import { metrics } from './sizes/metrics';

const lightTheme = { colors: lightColors, metrics };
const darkTheme = { colors: darkColors, metrics };

export type AppTheme = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

type AppBreakpoints = typeof breakpoints;

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppTheme {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
    // register other themes with unique names
  })
  .addConfig({
    // you can pass here optional config described below
    adaptiveThemes: true,
  });
