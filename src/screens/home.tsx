import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeView } from '@components/ui/safe-view';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const { styles } = useStyles(stylesheet);

  const navigate = () => {
    navigation.navigate('single' as never);
  };

  return (
    <SafeView style={styles.container}>
      <TouchableOpacity onPress={navigate} style={styles.button}>
        <Text style={styles.buttonText}>Ir para questões</Text>
      </TouchableOpacity>
    </SafeView>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
