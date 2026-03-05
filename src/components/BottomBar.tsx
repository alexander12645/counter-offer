import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { spacing, colors, typography, radii } from '../theme/tokens';

interface BottomBarProps {
  buttonLabel: string;
  onPress?: () => void;
  footnote?: string;
  variant?: 'primary' | 'destructive';
}

export function BottomBar({
  buttonLabel,
  onPress,
  footnote,
  variant = 'destructive',
}: BottomBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.content}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.button,
            variant === 'destructive' ? styles.destructiveButton : styles.primaryButton,
          ]}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.buttonLabel,
              variant === 'destructive'
                ? styles.destructiveLabel
                : styles.primaryLabel,
            ]}
          >
            {buttonLabel}
          </Text>
        </TouchableOpacity>
        {footnote && <Text style={styles.footnote}>{footnote}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border.default,
  },
  content: {
    paddingHorizontal: spacing.x6,
    paddingTop: spacing.x4,
    paddingBottom: spacing.x4,
    gap: spacing.x3,
  },
  button: {
    height: 48,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destructiveButton: {
    backgroundColor: '#D32F2F',
  },
  primaryButton: {
    backgroundColor: colors.accent.primary,
  },
  buttonLabel: {
    ...typography.labelMedium.strong,
  },
  destructiveLabel: {
    color: colors.content.onColor,
  },
  primaryLabel: {
    color: colors.content.onColor,
  },
  footnote: {
    fontFamily: typography.labelSmall.default.fontFamily,
    fontSize: 12,
    lineHeight: 16,
    color: colors.content.subtle,
    textAlign: 'center' as const,
  },
});
