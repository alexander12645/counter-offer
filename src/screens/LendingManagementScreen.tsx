import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationTopBar } from '../components/NavigationTopBar';
import { Badge } from '../components/Badge';
import { colors, spacing, fontFamily, typography, radii } from '../theme/tokens';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList, 'LendingManagement'>;

export function LendingManagementScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<Nav>();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />

      <NavigationTopBar
        title="Empréstimos"
        onBack={() => navigation.goBack()}
        onHelp={() => {}}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>
            Ana, você está em dia com seu empréstimo
          </Text>
        </View>

        {/* Loan card */}
        <View style={styles.cardSection}>
          <View style={styles.card}>
            <Text style={styles.cardListTitle}>Meus empréstimos contratados</Text>

            <View style={styles.loanRow}>
              <View style={styles.loanAvatar}>
                <Ionicons name="business-outline" size={22} color={colors.content.subtle} />
              </View>

              <View style={styles.loanContent}>
                <Text style={styles.loanTitle}>Consignado · R$113,16/mês</Text>
                <Text style={styles.loanSubtitle}>
                  27/48 parcelas de R$113,16{'\n'}Desconto em folha
                </Text>
              </View>

              <Badge label="Em dia" variant="success" />
            </View>
          </View>
        </View>

        {/* Portabilidade entry point */}
        <View style={styles.cardSection}>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('PortabilityList')}
          >
            <View style={styles.portabilityRow}>
              <View style={styles.portabilityContent}>
                <Text style={styles.portabilityTitle}>Portabilidade</Text>
                <Text style={styles.portabilitySubtitle}>
                  Acompanhe seus pedidos de portabilidade de empréstimo
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.content.subtle} />
            </View>
          </TouchableOpacity>
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
  titleSection: {
    paddingHorizontal: spacing.x6,
    paddingTop: 48,
    paddingBottom: spacing.x6,
  },
  title: {
    fontFamily: fontFamily.semibold,
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.84,
    color: colors.content.default,
  },
  cardSection: {
    paddingHorizontal: spacing.x6,
    paddingBottom: spacing.x6,
  },
  card: {
    borderWidth: 2,
    borderColor: colors.border.default,
    borderRadius: radii.medium,
    overflow: 'hidden',
    paddingVertical: spacing.x2,
  },
  cardListTitle: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
    paddingHorizontal: spacing.x4,
    paddingVertical: spacing.x4,
  },
  loanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.x4,
    paddingVertical: spacing.x4,
    gap: spacing.x4,
  },
  loanAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface.subtle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loanContent: {
    flex: 1,
    gap: spacing.x1,
  },
  loanTitle: {
    ...typography.labelSmall.strong,
    color: colors.content.default,
  },
  loanSubtitle: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
  },
  portabilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.x4,
    paddingVertical: spacing.x4,
    gap: spacing.x3,
  },
  portabilityContent: {
    flex: 1,
    gap: spacing.x1,
  },
  portabilityTitle: {
    ...typography.labelSmall.strong,
    color: colors.content.default,
  },
  portabilitySubtitle: {
    ...typography.paragraph.small.default,
    color: colors.content.subtle,
  },
});
