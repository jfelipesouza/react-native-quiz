import React from 'react';
import { SafeAreaView, StatusBar, StyleProp, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type SafeViewProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
export const SafeView: React.FC<SafeViewProps> = ({ children, style }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle={'light-content'} />
      {children}
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
