import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const HomeScreen: React.FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create(theme => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: theme.colors.onPrimary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 18,
    color: theme.colors.onPrimary,
  },
}));
