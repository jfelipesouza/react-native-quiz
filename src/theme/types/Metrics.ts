export type FontSizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  title: number;
};

export type Spacings = {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type BorderRadius = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
};

export type BorderWidths = {
  none: number;
  hairline: number;
  thin: number;
  thick: number;
  heavy: number;
};

export type ThemeMetrics = {
  fontSizes: FontSizes;
  spacings: Spacings;
  borderRadius: BorderRadius;
  borderWidths: BorderWidths;
  dimensions: {
    w: number;
    h: number;
    bar: number;
  };
};
