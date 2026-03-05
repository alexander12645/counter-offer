import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { spacing, colors, typography, radii } from '../theme/tokens';

type StepState = 'active' | 'disabled';

interface TimelineStepProps {
  title: string;
  description?: string;
  icon: keyof typeof Ionicons.glyphMap;
  state?: StepState;
  isLast?: boolean;
  accentColor?: string;
}

const BULLET_SIZE = 32;
const TRACK_WIDTH = 2;
const CONNECTOR_HEIGHT = 12;
const CARD_BORDER = 2;

export function TimelineStep({
  title,
  description,
  icon,
  state = 'disabled',
  isLast = false,
  accentColor,
}: TimelineStepProps) {
  const isActive = state === 'active';
  const bulletBg = isActive
    ? (accentColor ?? colors.surface.accent.primary)
    : colors.surface.disabled;

  return (
    <View>
      <View
        style={[
          styles.card,
          isActive ? styles.activeCard : styles.disabledCard,
        ]}
      >
        <View style={[styles.bullet, { backgroundColor: bulletBg }]}>
          <Ionicons
            name={icon}
            size={20}
            color={isActive ? colors.content.onColor : colors.content.disabled}
          />
        </View>
        <View style={styles.content}>
          <Text
            style={[
              styles.title,
              { color: isActive ? colors.content.default : colors.content.subtle },
            ]}
          >
            {title}
          </Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </View>

      {!isLast && <View style={styles.connector} />}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radii.medium,
    paddingHorizontal: spacing.x4,
    paddingVertical: spacing.x6,
    borderWidth: CARD_BORDER,
    gap: spacing.x3,
  },
  activeCard: {
    backgroundColor: colors.surface.subtle,
    borderColor: 'transparent',
  },
  disabledCard: {
    backgroundColor: colors.surface.default,
    borderColor: colors.border.default,
  },
  bullet: {
    width: BULLET_SIZE,
    height: BULLET_SIZE,
    borderRadius: BULLET_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    gap: spacing.x1,
  },
  title: {
    ...typography.subtitle.small.strong,
  },
  description: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
  },
  connector: {
    width: TRACK_WIDTH,
    height: CONNECTOR_HEIGHT,
    backgroundColor: colors.border.default,
    marginLeft: CARD_BORDER + spacing.x4 + BULLET_SIZE / 2 - TRACK_WIDTH / 2,
    // 2 + 16 + 16 - 1 = 33 → aligns with bullet center
  },
});
