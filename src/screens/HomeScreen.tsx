import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
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
  { icon: 'hand-left-outline' as const, label: 'Pegar\nempréstimo', badge: 'R$12.300' },
  { icon: 'barcode-outline' as const, label: 'Pagar' },
  { icon: 'arrow-down-outline' as const, label: 'Depositar' },
  { icon: 'phone-portrait-outline' as const, label: 'Recarga' },
  { icon: 'chatbubble-outline' as const, label: 'Cobrar' },
  { icon: 'cash-outline' as const, label: 'Salário' },
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
              <Ionicons name="person-outline" size={24} color="#820AD1" />
            </View>
            <View style={styles.headerIcons}>
              <Ionicons name="eye-outline" size={24} color="#FFF" />
              <Ionicons name="help-circle-outline" size={24} color="#FFF" />
              <Ionicons name="mail-outline" size={24} color="#FFF" />
            </View>
          </View>
          <Text style={styles.greeting}>Olá, Gabriela</Text>
        </View>

        {/* Account section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} activeOpacity={0.7}>
            <Text style={styles.sectionTitle}>Conta</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.content.subtle} />
          </TouchableOpacity>
          <Text style={styles.balanceAmount}>R$ 1.356,98</Text>
        </View>

        {/* Shortcuts — horizontal scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.shortcutsScroll}
          style={styles.shortcutsContainer}
        >
          {SHORTCUTS.map((s, i) => (
            <View key={i} style={styles.shortcutItem}>
              <View style={styles.shortcutCircleWrapper}>
                <View style={styles.shortcutCircle}>
                  <Ionicons name={s.icon} size={26} color={colors.content.default} />
                </View>
                {s.badge && (
                  <View style={styles.shortcutBadge}>
                    <Text style={styles.shortcutBadgeText}>{s.badge}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.shortcutLabel}>{s.label}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Meus cartões */}
        <View style={styles.cardRow}>
          <View style={styles.cardIconCircle}>
            <Ionicons name="copy-outline" size={18} color={colors.content.default} />
          </View>
          <Text style={styles.cardRowText}>Meus cartões</Text>
        </View>

        {/* Banner */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerTopRow}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerText}>
                Agora você pode antecipar seu{'\n'}
                <Text style={styles.bannerBold}>saque-aniversário do FTGS.</Text>
              </Text>
            </View>
            <View style={styles.bannerIconContainer}>
              <View style={styles.bannerCoin}>
                <Ionicons name="logo-usd" size={16} color="#FFF" />
              </View>
            </View>
          </View>
          <View style={styles.dotsRow}>
            <View style={[styles.dot, styles.dotActive]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.divider} />

        {/* Cartão de crédito */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} activeOpacity={0.7}>
            <Text style={styles.sectionTitle}>Cartão de crédito</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.content.subtle} />
          </TouchableOpacity>
          <Text style={styles.sectionSubtitle}>Fatura atual</Text>
          <Text style={styles.sectionAmount}>R$ 1.094,80</Text>
          <Text style={styles.sectionCaption}>Limite disponível: R$ 730,00</Text>
        </View>

        <View style={styles.divider} />

        {/* Empréstimo — entry point */}
        <TouchableOpacity
          style={styles.lendingSection}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('LendingManagement')}
        >
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Empréstimo</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.content.subtle} />
          </View>
          <Text style={styles.lendingCaption}>
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
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D8ABFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.x5,
  },
  greeting: {
    fontFamily: fontFamily.medium,
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: spacing.x6,
    paddingVertical: spacing.x6,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.x1,
  },
  sectionTitle: {
    fontFamily: fontFamily.medium,
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.2,
    color: colors.content.default,
  },
  sectionSubtitle: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
    marginTop: spacing.x2,
  },
  sectionAmount: {
    fontFamily: fontFamily.medium,
    fontSize: 24,
    lineHeight: 30,
    color: colors.content.default,
    marginTop: spacing.x1,
  },
  sectionCaption: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
    marginTop: spacing.x2,
  },
  balanceAmount: {
    fontFamily: fontFamily.medium,
    fontSize: 24,
    lineHeight: 30,
    color: colors.content.default,
    marginTop: spacing.x2,
  },
  shortcutsContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.border.default,
  },
  shortcutsScroll: {
    paddingHorizontal: spacing.x6,
    paddingVertical: spacing.x5,
    gap: spacing.x4,
  },
  shortcutItem: {
    alignItems: 'center',
    width: 76,
  },
  shortcutCircleWrapper: {
    alignItems: 'center',
    marginBottom: spacing.x2,
  },
  shortcutCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.surface.subtle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shortcutBadge: {
    backgroundColor: colors.accent.primary,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: -8,
  },
  shortcutBadgeText: {
    fontFamily: fontFamily.medium,
    fontSize: 10,
    color: '#FFF',
  },
  shortcutLabel: {
    fontFamily: fontFamily.medium,
    fontSize: 13,
    lineHeight: 17,
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
    marginBottom: spacing.x4,
    gap: spacing.x2,
  },
  bannerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerContent: {
    flex: 1,
  },
  bannerText: {
    ...typography.paragraph.small.default,
    color: colors.content.default,
  },
  bannerBold: {
    fontFamily: fontFamily.medium,
  },
  bannerIconContainer: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerCoin: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2E7D32',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#B0A8C0',
  },
  dotActive: {
    backgroundColor: '#1A1A1A',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border.default,
  },
  lendingSection: {
    paddingHorizontal: spacing.x6,
    paddingTop: spacing.x6,
    paddingBottom: spacing.x8,
  },
  lendingCaption: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
    marginTop: spacing.x3,
  },
});
