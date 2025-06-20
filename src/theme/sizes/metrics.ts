import type { ThemeMetrics } from '../types/Metrics';
import { scaleSize } from '../../utils/scale';
import { Dimensions, StatusBar } from 'react-native';

const { width: w, height: h } = Dimensions.get('screen');
const bar = StatusBar.currentHeight || 40;
export const metrics: ThemeMetrics = {
  fontSizes: {
    xs: scaleSize(10),
    sm: scaleSize(12),
    md: scaleSize(14),
    lg: scaleSize(16),
    xl: scaleSize(20),
    title: scaleSize(24),
  },
  spacings: {
    none: 0,
    xs: scaleSize(4),
    sm: scaleSize(8),
    md: scaleSize(12),
    lg: scaleSize(16),
    xl: scaleSize(24),
  },
  borderRadius: {
    sm: scaleSize(4),
    md: scaleSize(8),
    lg: scaleSize(12),
    xl: scaleSize(16),
    full: 9999,
  },
  borderWidths: {
    none: 0,
    hairline: scaleSize(0.5),
    thin: scaleSize(1),
    thick: scaleSize(2),
    heavy: scaleSize(4),
  },
  dimensions: {
    w,
    h,
    bar,
  },
};
