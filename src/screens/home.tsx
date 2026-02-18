import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native-unistyles';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('single' as never);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigate} style={styles.button}>
        <Text style={styles.buttonText}>Ir para questões</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
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
