import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type NormalItemProps = {
  id: string;
  value: string;
  onPress: (id: string) => void; // Nova prop: função para lidar com o clique
  isSelected: string | null;
  correctValue: string;
};

export const NormalItem: React.FC<NormalItemProps> = ({
  value,
  isSelected,
  correctValue,
  onPress,
  id,
}) => {
  const { styles } = useStyles(stylesheet);

  const handleSelect = () => {
    onPress(value);
  };

  const verifyItem = () => {
    if (isSelected === null) return styles.container;
    if (correctValue === id) {
      return [styles.container, styles.success];
    }
    return [styles.errorContainer, styles.error];
  };

  if (isSelected !== null) {
    return (
      <View style={verifyItem()}>
        <Text style={styles.choiceText}> {value}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={handleSelect} style={verifyItem()}>
      <Text style={styles.choiceText}> {value}</Text>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    width: '100%',
    backgroundColor: theme.colors.secondary,
    paddingVertical: theme.metrics.spacings.sm,
    paddingHorizontal: theme.metrics.spacings.sm,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  errorContainer: {
    width: '100%',
    backgroundColor: theme.colors.surface,
    paddingVertical: theme.metrics.spacings.sm,
    paddingHorizontal: theme.metrics.spacings.sm,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    opacity: 0.5,
  },
  choiceText: {
    color: theme.colors.onSecondary,
    fontSize: 17,
  },
  error: {
    borderColor: theme.colors.error,
  },
  success: {
    borderColor: theme.colors.success,
  },
}));
