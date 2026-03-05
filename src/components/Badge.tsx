import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, typography, radii } from '../theme/tokens';

type BadgeVariant = 'neutral' | 'success' | 'warning' | 'error';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const backgroundColors: Record<BadgeVariant, string> = {
  neutral: colors.surface.subtle,
  success: '#E8F5E9',
  warning: '#FFF3E0',
  error: '#FFEBEE',
};

const textColors: Record<BadgeVariant, string> = {
  neutral: colors.content.subtle,
  success: '#2E7D32',
  warning: '#E65100',
  error: '#C62828',
};

export function Badge({ label, variant = 'neutral' }: BadgeProps) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColors[variant] }]}>
      <Text style={[styles.label, { color: textColors[variant] }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radii.full,
    alignSelf: 'flex-start',
  },
  label: {
    fontFamily: typography.label.xsmall.strong.fontFamily,
    fontSize: typography.label.xsmall.strong.fontSize,
    lineHeight: typography.label.xsmall.strong.lineHeight,
    letterSpacing: typography.label.xsmall.strong.letterSpacing,
  },
});
