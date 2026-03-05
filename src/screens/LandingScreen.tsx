import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { fontFamily, colors, spacing, radii } from '../theme/tokens';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Landing'>;

export function LandingScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<Nav>();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Counter-offer{'\n'}Experience</Text>
        <Text style={styles.subtitle}>Escolha um módulo para iniciar o protótipo</Text>

        {/* Module cards */}
        <View style={styles.cardsContainer}>
          {/* Module 2 — Active */}
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Home')}
          >
            <View style={styles.cardBadge}>
              <Text style={styles.cardBadgeText}>MÓDULO 2</Text>
            </View>
            <Text style={styles.cardTitle}>Redirect to Refinancing</Text>
            <Text style={styles.cardDescription}>
              Redirecting customer for refinancing flow
            </Text>
            <View style={styles.cardFooter}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Pronto para testar</Text>
              <Ionicons name="arrow-forward" size={18} color={colors.accent.primary} />
            </View>
          </TouchableOpacity>

          {/* Module 3 — Disabled */}
          <View style={[styles.card, styles.cardDisabled]}>
            <View style={[styles.cardBadge, styles.cardBadgeDisabled]}>
              <Text style={[styles.cardBadgeText, styles.cardBadgeTextDisabled]}>MÓDULO 3</Text>
            </View>
            <Text style={[styles.cardTitle, styles.cardTitleDisabled]}>Em breve</Text>
            <Text style={[styles.cardDescription, styles.cardDescriptionDisabled]}>
              Full counter-offer experience with specific policy
            </Text>
            <View style={styles.cardFooter}>
              <View style={[styles.statusDot, styles.statusDotDisabled]} />
              <Text style={[styles.statusText, styles.statusTextDisabled]}>Não disponível</Text>
              <Ionicons name="lock-closed-outline" size={16} color={colors.content.disabled} />
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#820AD1',
    paddingHorizontal: spacing.x6,
    paddingTop: 20,
    paddingBottom: 32,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.x3,
  },
  nuLogo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nuLogoText: {
    fontFamily: fontFamily.semibold,
    fontSize: 16,
    color: '#FFFFFF',
  },
  headerLabel: {
    fontFamily: fontFamily.semibold,
    fontSize: 11,
    letterSpacing: 2,
    color: 'rgba(255,255,255,0.6)',
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.x6,
    paddingTop: 120,
  },
  title: {
    fontFamily: fontFamily.semibold,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.64,
    color: colors.content.default,
    marginBottom: spacing.x3,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 22,
    color: colors.content.subtle,
    marginBottom: 32,
  },
  cardsContainer: {
    gap: spacing.x4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: radii.medium,
    padding: spacing.x5,
    gap: spacing.x3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardDisabled: {
    backgroundColor: '#FAFAFA',
    shadowOpacity: 0,
    elevation: 0,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  cardBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3E5F5',
    borderRadius: radii.small,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  cardBadgeDisabled: {
    backgroundColor: colors.surface.subtle,
  },
  cardBadgeText: {
    fontFamily: fontFamily.semibold,
    fontSize: 11,
    letterSpacing: 1,
    color: '#820AD1',
  },
  cardBadgeTextDisabled: {
    color: colors.content.disabled,
  },
  cardTitle: {
    fontFamily: fontFamily.semibold,
    fontSize: 20,
    lineHeight: 24,
    color: colors.content.default,
  },
  cardTitleDisabled: {
    color: colors.content.disabled,
  },
  cardDescription: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.content.subtle,
  },
  cardDescriptionDisabled: {
    color: colors.content.disabled,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.x2,
    gap: spacing.x2,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2E7D32',
  },
  statusDotDisabled: {
    backgroundColor: colors.content.disabled,
  },
  statusText: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 13,
    color: '#2E7D32',
  },
  statusTextDisabled: {
    color: colors.content.disabled,
  },
  spacer: {
    flex: 1,
  },
  prdLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.x2,
    marginTop: spacing.x4,
    paddingVertical: spacing.x4,
    paddingHorizontal: spacing.x5,
    backgroundColor: '#FFFFFF',
    borderRadius: radii.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  prdLinkText: {
    flex: 1,
    fontFamily: fontFamily.semibold,
    fontSize: 15,
    color: colors.accent.primary,
  },
});
