import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, typography } from '../theme/tokens';

interface RadioOptionProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export function RadioOption({ label, selected, onPress }: RadioOptionProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioDot} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.x6,
    paddingVertical: spacing.x4,
    gap: spacing.x4,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.content.subtle,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  radioSelected: {
    borderColor: colors.accent.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.accent.primary,
  },
  label: {
    ...typography.labelMedium.default,
    color: colors.content.default,
    flex: 1,
  },
});
