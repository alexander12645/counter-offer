import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { spacing, colors } from '../theme/tokens';

interface TopBarProps {
  onClose?: () => void;
  onHelp?: () => void;
}

export function TopBar({ onClose, onHelp }: TopBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.iconButton} activeOpacity={0.7}>
        <Ionicons name="close" size={24} color={colors.content.default} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onHelp} style={styles.iconButton} activeOpacity={0.7}>
        <Ionicons name="help-circle-outline" size={24} color={colors.content.default} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.x6,
    paddingVertical: spacing.x3,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
