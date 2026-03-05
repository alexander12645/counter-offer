import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, spacing, fontFamily, typography, radii } from '../theme/tokens';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const SHORTCUTS = [
  { icon: 'grid-outline' as const, label: 'Pix' },
  { icon: 'swap-horizontal-outline' as const, label: 'Transferir' },
  { icon: 'cash-outline' as const, label: 'Pagar\nempréstimo', badge: 'R$12.300' },
  { icon: 'barcode-outline' as const, label: 'Pagar' },
];

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Purple header */}
        <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
          <View style={styles.headerTop}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person-outline" size={20} color="#820AD1" />
            </View>
            <View style={styles.headerIcons}>
              <Ionicons name="eye-outline" size={22} color="#FFF" style={styles.headerIcon} />
              <Ionicons name="help-circle-outline" size={22} color="#FFF" style={styles.headerIcon} />
              <Ionicons name="mail-outline" size={22} color="#FFF" />
            </View>
          </View>
          <Text style={styles.greeting}>Olá, Gabriela</Text>
        </View>

        {/* Account section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} activeOpacity={0.7}>
            <Text style={styles.sectionTitle}>Conta</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.content.subtle} />
          </TouchableOpacity>
          <Text style={styles.balanceAmount}>R$ 1.356,98</Text>
        </View>

        {/* Shortcuts */}
        <View style={styles.shortcutsRow}>
          {SHORTCUTS.map((s, i) => (
            <View key={i} style={styles.shortcutItem}>
              <View style={styles.shortcutCircle}>
                <Ionicons name={s.icon} size={22} color={colors.content.default} />
                {s.badge && (
                  <View style={styles.shortcutBadge}>
                    <Text style={styles.shortcutBadgeText}>{s.badge}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.shortcutLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Meus cartões */}
        <View style={styles.cardRow}>
          <View style={styles.cardIconCircle}>
            <Ionicons name="card-outline" size={18} color={colors.content.default} />
          </View>
          <Text style={styles.cardRowText}>Meus cartões</Text>
        </View>

        {/* Banner */}
        <View style={styles.bannerCard}>
          <Text style={styles.bannerText}>
            Agora você pode antecipar seu{'\n'}
            <Text style={styles.bannerBold}>saque-aniversário do FTGS.</Text>
          </Text>
          <View style={styles.bannerIcon}>
            <Ionicons name="logo-usd" size={28} color="#FFF" />
          </View>
        </View>
        <View style={styles.dotsRow}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Cartão de crédito */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} activeOpacity={0.7}>
            <Text style={styles.sectionTitle}>Cartão de crédito</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.content.subtle} />
          </TouchableOpacity>
          <Text style={styles.sectionSubtitle}>Fatura atual</Text>
          <Text style={styles.sectionAmount}>R$ 1.094,80</Text>
          <Text style={styles.sectionCaption}>Limite disponível: R$ 730,00</Text>
        </View>

        <View style={styles.divider} />

        {/* Empréstimo — entry point */}
        <TouchableOpacity
          style={styles.section}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('LendingManagement')}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Empréstimo</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.content.subtle} />
          </View>
          <Text style={styles.sectionCaption}>
            Revise o pedido de portabilidade do seu empréstimo.
          </Text>
        </TouchableOpacity>

        {/* Acompanhe também */}
        <View style={styles.divider} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acompanhe também</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  scroll: {
    flex: 1,
  },
  header: {
    backgroundColor: '#820AD1',
    paddingHorizontal: spacing.x6,
    paddingBottom: spacing.x6,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.x6,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D8ABFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.x4,
  },
  headerIcon: {
    marginRight: 0,
  },
  greeting: {
    fontFamily: fontFamily.medium,
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: spacing.x6,
    paddingVertical: spacing.x5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.x1,
  },
  sectionTitle: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: -0.18,
    color: colors.content.default,
  },
  sectionSubtitle: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
    marginTop: spacing.x2,
  },
  sectionAmount: {
    fontFamily: fontFamily.medium,
    fontSize: 22,
    lineHeight: 28,
    color: colors.content.default,
    marginTop: spacing.x1,
  },
  sectionCaption: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
    marginTop: spacing.x1,
  },
  balanceAmount: {
    fontFamily: fontFamily.medium,
    fontSize: 22,
    lineHeight: 28,
    color: colors.content.default,
    marginTop: spacing.x2,
  },
  shortcutsRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.x6,
    paddingVertical: spacing.x4,
    gap: spacing.x4,
  },
  shortcutItem: {
    alignItems: 'center',
    width: 70,
  },
  shortcutCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.surface.subtle,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.x2,
  },
  shortcutBadge: {
    position: 'absolute',
    bottom: -2,
    right: -8,
    backgroundColor: '#2E7D32',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  shortcutBadgeText: {
    fontFamily: fontFamily.medium,
    fontSize: 9,
    color: '#FFF',
  },
  shortcutLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 16,
    color: colors.content.default,
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.x6,
    paddingHorizontal: spacing.x4,
    paddingVertical: spacing.x3,
    backgroundColor: colors.surface.subtle,
    borderRadius: radii.medium,
    gap: spacing.x3,
    marginBottom: spacing.x4,
  },
  cardIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRowText: {
    ...typography.labelSmall.strong,
    color: colors.content.default,
  },
  bannerCard: {
    marginHorizontal: spacing.x6,
    backgroundColor: '#EEEEFF',
    borderRadius: radii.medium,
    padding: spacing.x5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerText: {
    ...typography.paragraph.small.default,
    color: colors.content.default,
    flex: 1,
  },
  bannerBold: {
    fontFamily: fontFamily.medium,
  },
  bannerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.x4,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.x2,
    marginTop: spacing.x3,
    marginBottom: spacing.x2,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border.default,
  },
  dotActive: {
    backgroundColor: colors.content.default,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border.default,
    marginHorizontal: spacing.x6,
  },
});
