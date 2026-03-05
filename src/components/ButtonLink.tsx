import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography } from '../theme/tokens';

interface ButtonLinkProps {
  label: string;
  onPress?: () => void;
  compact?: boolean;
}

export function ButtonLink({ label, onPress, compact = true }: ButtonLinkProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-forward"
          size={compact ? 16 : 18}
          color={colors.accent.primary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  label: {
    ...typography.labelSmall.strong,
    color: colors.accent.primary,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
