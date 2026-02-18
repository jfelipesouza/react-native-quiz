import { ThemeMetrics } from './types/Metrics';
import { ThemeColors } from './types/ThemeColors';

import { lightColors, darkColors } from './colors';
import { metrics as METRICS } from './sizes/metrics';
import { breakpoints } from './sizes/breakpoints';

const createTheme = (colors: ThemeColors, metrics: ThemeMetrics) => {
  return {
    colors,
    metrics,
  };
};

const lightTheme = createTheme(lightColors, METRICS);
const darkTheme = createTheme(darkColors, METRICS);

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

export type AppBreakpoints = typeof breakpoints;

const appThemes: AppThemes = {
  light: lightTheme,
  dark: darkTheme,
};

export { breakpoints, appThemes };
