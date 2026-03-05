import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { spacing, colors, typography } from '../theme/tokens';

interface NavigationTopBarProps {
  title?: string;
  onBack?: () => void;
  onHelp?: () => void;
}

export function NavigationTopBar({ title, onBack, onHelp }: NavigationTopBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.iconButton} activeOpacity={0.7}>
        <Ionicons name="chevron-back" size={24} color={colors.content.default} />
      </TouchableOpacity>

      {title ? (
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      ) : (
        <View style={styles.spacer} />
      )}

      {onHelp ? (
        <TouchableOpacity onPress={onHelp} style={styles.iconButton} activeOpacity={0.7}>
          <Ionicons name="help-circle-outline" size={24} color={colors.content.default} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconButton} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.x5,
    paddingVertical: spacing.x3,
    backgroundColor: colors.surface.default,
  },
  iconButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: typography.subtitle.small.strong.fontFamily,
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: -0.18,
    color: colors.content.default,
  },
  spacer: {
    flex: 1,
  },
});
