import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from './BottomSheet';
import { colors, spacing, fontFamily, typography, radii } from '../theme/tokens';

interface ConditionsBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onSimulate: () => void;
}

export function ConditionsBottomSheet({
  visible,
  onClose,
  onSimulate,
}: ConditionsBottomSheetProps) {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View style={styles.content}>
        {/* Close button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton} activeOpacity={0.7}>
          <Ionicons name="close" size={24} color={colors.content.default} />
        </TouchableOpacity>

        {/* Illustration */}
        <View style={styles.illustration}>
          <Image
            source={require('../../assets/bottom-sheet.png')}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>
          Condições melhores pra manter seu consignado no Nubank
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Você pode refinanciar seu empréstimo com{' '}
          <Text style={styles.bold}>taxa de x,x% ao mês</Text>, menor que a do
          seu contrato atual, mantendo o valor da parcela e ainda{' '}
          <Text style={styles.bold}>recebendo até R$ x.xxx,xx na hora</Text>.
        </Text>

        {/* Diamond separator */}
        <View style={styles.diamondRow}>
          <View style={styles.diamond} />
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8} onPress={onSimulate}>
          <Text style={styles.primaryButtonText}>Simular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.7} onPress={onClose}>
          <Text style={styles.secondaryButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.x6,
    paddingTop: spacing.x2,
    paddingBottom: spacing.x4,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  illustration: {
    alignItems: 'flex-start',
    marginTop: spacing.x4,
    marginBottom: spacing.x6,
  },
  illustrationImage: {
    width: 128,
    height: 128,
  },
  title: {
    fontFamily: fontFamily.semibold,
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.48,
    color: colors.content.default,
    marginBottom: spacing.x4,
  },
  description: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
    marginBottom: spacing.x6,
  },
  bold: {
    fontFamily: fontFamily.semibold,
    color: colors.content.default,
  },
  diamondRow: {
    alignItems: 'center',
    marginBottom: spacing.x6,
  },
  diamond: {
    width: 8,
    height: 8,
    backgroundColor: colors.border.default,
    transform: [{ rotate: '45deg' }],
  },
  primaryButton: {
    backgroundColor: colors.accent.primary,
    borderRadius: radii.full,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: spacing.x3,
  },
  primaryButtonText: {
    fontFamily: fontFamily.semibold,
    fontSize: 16,
    color: '#FFFFFF',
  },
  secondaryButton: {
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: colors.surface.subtle,
    borderRadius: radii.full,
  },
  secondaryButtonText: {
    fontFamily: fontFamily.semibold,
    fontSize: 16,
    color: colors.content.default,
  },
});
