import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/tokens';

interface DividerProps {
  color?: 'default' | 'transparent';
  inset?: boolean;
}

export function Divider({ color = 'default', inset = false }: DividerProps) {
  if (color === 'transparent') return null;

  return (
    <View
      style={[
        styles.divider,
        inset && { marginHorizontal: spacing.x6 },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border.default,
  },
});
