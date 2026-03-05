import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../theme/tokens';
import { TopBar } from './TopBar';

interface HeaderProps {
  title: string;
  onClose?: () => void;
  onHelp?: () => void;
}

export function Header({ title, onClose, onHelp }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TopBar onClose={onClose} onHelp={onHelp} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default,
  },
  titleContainer: {
    paddingHorizontal: spacing.x6,
    paddingTop: spacing.x4,
    paddingBottom: spacing.x6,
  },
  title: {
    ...typography.title.small,
    color: colors.content.default,
  },
});
