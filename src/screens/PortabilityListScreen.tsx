import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationTopBar } from '../components/NavigationTopBar';
import { Badge } from '../components/Badge';
import { colors, spacing, fontFamily, typography, radii } from '../theme/tokens';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'PortabilityList'>;

export function PortabilityListScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<Nav>();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />

      <NavigationTopBar
        onBack={() => navigation.goBack()}
        onHelp={() => {}}
      />

      {/* Header */}
      <View style={styles.headerSection}>
        <Text style={styles.title}>Pedidos de portabilidade</Text>
        <Text style={styles.subtitle}>
          Acompanhe seus pedidos de portabilidade de empréstimo pessoal
        </Text>
      </View>

      {/* Loan entry card */}
      <View style={styles.cardSection}>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('PortabilityDetails')}
        >
          <View style={styles.row}>
            <View style={styles.avatar}>
              <Text style={styles.avatarLetter}>S</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.loanName}>Portabilidade de "Dinheiro de empréstimo"</Text>
              <Text style={styles.loanStatus}>Recebemos seu pedido</Text>
            </View>

            <Badge label="Recebido" variant="neutral" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  headerSection: {
    paddingHorizontal: spacing.x6,
    paddingTop: spacing.x4,
    paddingBottom: spacing.x6,
    gap: spacing.x2,
  },
  title: {
    ...typography.title.small,
    color: colors.content.default,
  },
  subtitle: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
  },
  cardSection: {
    paddingHorizontal: spacing.x6,
  },
  card: {
    borderWidth: 2,
    borderColor: colors.border.default,
    borderRadius: radii.medium,
    paddingVertical: spacing.x2,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.x4,
    paddingVertical: spacing.x4,
    gap: spacing.x4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetter: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    gap: spacing.x1,
  },
  loanName: {
    ...typography.labelSmall.strong,
    color: colors.content.default,
  },
  loanStatus: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
  },
});
