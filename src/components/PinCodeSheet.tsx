import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheet } from './BottomSheet';
import { colors, spacing, typography, radii } from '../theme/tokens';

interface PinCodeSheetProps {
  visible: boolean;
  onClose: () => void;
  onComplete: (pin: string) => void;
}

const SUB_LABELS: Record<string, string> = {
  '2': 'ABC',
  '3': 'DEF',
  '4': 'GHI',
  '5': 'JKL',
  '6': 'MNO',
  '7': 'PQRS',
  '8': 'TUV',
  '9': 'WXYZ',
};

const KEYPAD = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['', '0', 'delete'],
];

export function PinCodeSheet({ visible, onClose, onComplete }: PinCodeSheetProps) {
  const [pin, setPin] = useState('');
  const insets = useSafeAreaInsets();

  const handleKeyPress = (key: string) => {
    if (key === 'delete') {
      setPin((prev) => prev.slice(0, -1));
      return;
    }
    if (key === '') return;

    const newPin = pin + key;
    setPin(newPin);
    if (newPin.length === 4) {
      setTimeout(() => {
        onComplete(newPin);
        setPin('');
      }, 300);
    }
  };

  const handleClose = () => {
    setPin('');
    onClose();
  };

  return (
    <BottomSheet visible={visible} onClose={handleClose}>
      {/* Pin Code area — gap 24 between header and pin field */}
      <View style={styles.pinCodeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton} activeOpacity={0.7}>
            <Ionicons name="close" size={24} color={colors.content.default} />
          </TouchableOpacity>
          <Text style={styles.title}>Digite sua senha de 4 dígitos</Text>
        </View>

        <View style={styles.pinField}>
          {[0, 1, 2, 3].map((i) => (
            <View
              key={i}
              style={[
                styles.pinDot,
                pin.length > i && styles.pinDotFilled,
              ]}
            />
          ))}
        </View>

        <View style={styles.helperSpacer} />
      </View>

      {/* iOS Keyboard */}
      <View style={[styles.keyboard, { paddingBottom: Math.max(insets.bottom, 24), marginBottom: -Math.max(insets.bottom, 24) }]}>
        {KEYPAD.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.keyRow}>
            {row.map((key, colIndex) => {
              if (key === '') {
                return <View key={colIndex} style={styles.keyBlank} />;
              }
              if (key === 'delete') {
                return (
                  <Pressable
                    key={colIndex}
                    onPress={() => handleKeyPress(key)}
                    style={styles.keyBlank}
                  >
                    <Ionicons name="backspace-outline" size={26} color={colors.content.default} />
                  </Pressable>
                );
              }
              return (
                <Pressable
                  key={colIndex}
                  onPress={() => handleKeyPress(key)}
                  style={({ pressed }) => [
                    styles.key,
                    pressed && styles.keyPressed,
                  ]}
                >
                  <Text style={styles.keyNumber}>{key}</Text>
                  {SUB_LABELS[key] && (
                    <Text style={styles.keySub}>{SUB_LABELS[key]}</Text>
                  )}
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  pinCodeArea: {
    gap: spacing.x6,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: spacing.x6,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  title: {
    fontFamily: typography.title.small.fontFamily,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: colors.content.default,
    marginTop: spacing.x1,
  },
  pinField: {
    flexDirection: 'row',
    gap: 64,
    marginTop: 40,
    marginBottom: 40,
  },
  pinDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
  },
  pinDotFilled: {
    backgroundColor: colors.content.default,
  },
  helperSpacer: {
    height: 56,
  },
  keyboard: {
    backgroundColor: '#D0D5DB',
    paddingHorizontal: 8,
    paddingTop: 4,
    gap: 8,
  },
  keyRow: {
    flexDirection: 'row',
    gap: 6,
  },
  key: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 0,
    elevation: 1,
  },
  keyPressed: {
    backgroundColor: '#B8B8B8',
  },
  keyBlank: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyNumber: {
    fontSize: 24,
    fontWeight: '300',
    color: '#030303',
    lineHeight: 34,
  },
  keySub: {
    fontSize: 11,
    fontWeight: '400',
    color: '#030303',
    letterSpacing: 1,
    lineHeight: 13,
    marginTop: -2,
  },
});
