import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from './BottomSheet';
import { RadioOption } from './RadioOption';
import { colors, spacing, typography, radii } from '../theme/tokens';

interface CancelBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
}

const OPTIONS = [
  'Não solicitei a portabilidade',
  'Desisti da portabilidade, quero manter meu consignado com o Nubank',
];

export function CancelBottomSheet({ visible, onClose, onConfirm }: CancelBottomSheetProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClose = () => {
    setSelected(null);
    onClose();
  };

  const handleConfirm = () => {
    if (selected !== null) {
      onConfirm(OPTIONS[selected]);
      setSelected(null);
    }
  };

  return (
    <BottomSheet visible={visible} onClose={handleClose}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton} activeOpacity={0.7}>
          <Ionicons name="close" size={24} color={colors.content.default} />
        </TouchableOpacity>
        <Text style={styles.title}>Por que você quer cancelar a portabilidade?</Text>
      </View>

      <View style={styles.options}>
        {OPTIONS.map((option, index) => (
          <RadioOption
            key={index}
            label={option}
            selected={selected === index}
            onPress={() => setSelected(index)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleConfirm}
          style={[
            styles.button,
            selected !== null ? styles.buttonActive : styles.buttonDisabled,
          ]}
          activeOpacity={0.8}
          disabled={selected === null}
        >
          <Text
            style={[
              styles.buttonLabel,
              selected !== null ? styles.buttonLabelActive : styles.buttonLabelDisabled,
            ]}
          >
            Cancelar portabilidade
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.x6,
    paddingTop: spacing.x2,
    paddingBottom: spacing.x6,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  title: {
    ...typography.title.small,
    color: colors.content.default,
    marginTop: spacing.x2,
  },
  options: {
    paddingBottom: spacing.x4,
  },
  footer: {
    paddingHorizontal: spacing.x6,
    paddingTop: spacing.x2,
    paddingBottom: spacing.x2,
  },
  button: {
    height: 48,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: colors.accent.primary,
  },
  buttonDisabled: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  buttonLabel: {
    ...typography.labelMedium.strong,
  },
  buttonLabelActive: {
    color: colors.content.onColor,
  },
  buttonLabelDisabled: {
    color: colors.content.disabled,
  },
});
