import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, colors, typography, radii } from '../theme/tokens';
import { ButtonLink } from './ButtonLink';

interface CalloutBoxProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function CalloutBox({ title, description, actionLabel, onAction }: CalloutBoxProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {actionLabel && (
          <View style={styles.actionContainer}>
            <ButtonLink label={actionLabel} onPress={onAction} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.x6,
    backgroundColor: colors.surface.subtle,
    borderRadius: radii.medium,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: spacing.x4,
    gap: spacing.x2,
  },
  title: {
    ...typography.subtitle.small.strong,
    color: colors.content.default,
  },
  description: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
  },
  actionContainer: {
    marginTop: spacing.x1,
  },
});
