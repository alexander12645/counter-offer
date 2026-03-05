import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, colors, typography } from '../theme/tokens';
import { Divider } from './Divider';

interface ListRowProps {
  label: string;
  value?: string;
  trailing?: ReactNode;
  showTopDivider?: boolean;
  showBottomDivider?: boolean;
  multiLine?: boolean;
  subtitle?: string;
  transparent?: boolean;
}

export function ListRow({
  label,
  value,
  trailing,
  showTopDivider = false,
  showBottomDivider = true,
  multiLine = false,
  subtitle,
  transparent = false,
}: ListRowProps) {
  return (
    <View style={[styles.wrapper, transparent && styles.transparentWrapper]}>
      {showTopDivider && <Divider />}
      <View style={styles.container}>
        <View style={styles.leading}>
          <Text style={styles.label}>{label}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        <View style={styles.trailing}>
          {value && <Text style={styles.value}>{value}</Text>}
          {trailing}
        </View>
      </View>
      {showBottomDivider && <Divider />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.surface.default,
  },
  transparentWrapper: {
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.x6,
    paddingVertical: spacing.x4,
    gap: spacing.x4,
  },
  leading: {
    flex: 1,
    gap: spacing.x1,
  },
  label: {
    ...typography.labelMedium.strong,
    color: colors.content.default,
  },
  subtitle: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
  },
  trailing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.x2,
  },
  value: {
    ...typography.labelMedium.default,
    color: colors.content.default,
  },
});
