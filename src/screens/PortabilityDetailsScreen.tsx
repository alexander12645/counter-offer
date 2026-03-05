import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components/Header';
import { CalloutBox } from '../components/CalloutBox';
import { ListRow } from '../components/ListRow';
import { Badge } from '../components/Badge';
import { Avatar } from '../components/Avatar';
import { ButtonLink } from '../components/ButtonLink';
import { TimelineStep } from '../components/TimelineStep';
import { BottomBar } from '../components/BottomBar';
import { CancelBottomSheet } from '../components/CancelBottomSheet';
import { PinCodeSheet } from '../components/PinCodeSheet';
import { ConditionsBottomSheet } from '../components/ConditionsBottomSheet';
import { Toast } from '../components/Toast';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { colors, spacing } from '../theme/tokens';

const NUBANK_LOGO = require('../../assets/nubank.jpg');
const SICREDI_LOGO = require('../../assets/sicredi.jpg');

type FlowStep = 'idle' | 'cancel-reason' | 'pin-code' | 'loading' | 'cancelled';

export function PortabilityDetailsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [flowStep, setFlowStep] = useState<FlowStep>('idle');
  const [showToast, setShowToast] = useState(false);
  const [showConditions, setShowConditions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConditions(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleCancelPress = () => {
    setFlowStep('cancel-reason');
  };

  const handleReasonConfirm = () => {
    setFlowStep('pin-code');
  };

  const handlePinComplete = () => {
    setFlowStep('loading');
    setTimeout(() => {
      setFlowStep('cancelled');
      setShowToast(true);
    }, 2000);
  };

  const handleSheetClose = () => {
    if (flowStep !== 'loading' && flowStep !== 'cancelled') {
      setFlowStep('idle');
    }
  };

  const isCancelled = flowStep === 'cancelled';

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />

      <Toast
        message="Pedido de portabilidade cancelado"
        visible={showToast}
        onHide={() => setShowToast(false)}
      />

      {flowStep === 'loading' && (
        <View style={styles.loadingScreen}>
          <LoadingSpinner />
        </View>
      )}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title="Revise seu pedido de portabilidade"
          onClose={() => navigation.goBack()}
          onHelp={() => {}}
        />

        <View style={styles.calloutSection}>
          <CalloutBox
            title="Condições melhores pra manter seu consignado no Nubank"
            description="Refinancie seu empréstimo com taxa de x,xx% ao mês, mantendo o valor da parcela e ainda recebendo até R$ x.xxx,xx na hora."
            actionLabel="Simular"
            onAction={() => {}}
          />
        </View>

        <View style={styles.listSection}>
          <ListRow
            label="Status do pedido"
            showTopDivider
            showBottomDivider
            trailing={
              <Badge
                label={isCancelled ? 'Cancelado' : 'Recebido'}
                variant={isCancelled ? 'error' : 'neutral'}
              />
            }
          />
          <ListRow
            label="Do Nubank para Sicredi"
            showTopDivider={false}
            showBottomDivider
            trailing={
              <View style={styles.avatarGroup}>
                <Avatar source={NUBANK_LOGO} size="small" padding={4} />
                <Avatar source={SICREDI_LOGO} size="small" overlap padding={10} />
              </View>
            }
          />
          <ListRow
            label="Data do pedido"
            value="12/09/2025"
            showTopDivider={false}
            showBottomDivider
          />
          <ListRow
            label="Valor restante a pagar"
            value="R$ 2.232,03"
            showTopDivider={false}
            showBottomDivider={false}
          />
          <View style={styles.linkSection}>
            <ButtonLink label="Exibir empréstimo" onPress={() => {}} />
          </View>
        </View>

        <View style={styles.timelineSection}>
          {isCancelled ? (
            <>
              <TimelineStep
                title="Portabilidade cancelada a pedido do cliente"
                description="Recebemos seu pedido."
                icon="close-circle-outline"
                state="active"
                accentColor={colors.feedback.destructive}
              />
              <TimelineStep
                title="Portabilidade liberada"
                icon="lock-closed-outline"
                state="disabled"
              />
              <TimelineStep
                title="Portabilidade concluída"
                icon="lock-closed-outline"
                state="disabled"
                isLast
              />
            </>
          ) : (
            <>
              <TimelineStep
                title="Portabilidade solicitada"
                description="Recebemos seu pedido."
                icon="hourglass-outline"
                state="active"
              />
              <TimelineStep
                title="Portabilidade liberada"
                icon="lock-closed-outline"
                state="disabled"
              />
              <TimelineStep
                title="Portabilidade concluída"
                icon="lock-closed-outline"
                state="disabled"
                isLast
              />
            </>
          )}
        </View>

        <View style={styles.infoSection}>
          <ListRow
            label="Não foi você quem solicitou?"
            subtitle={'Toque em "Cancelar portabilidade" e nós iremos\ndesconsiderar o processo.'}
            showTopDivider={false}
            showBottomDivider={false}
            multiLine
            transparent
          />
        </View>
      </ScrollView>

      {!isCancelled && (
        <View style={{ paddingBottom: insets.bottom }}>
          <BottomBar
            buttonLabel="Cancelar portabilidade"
            variant="destructive"
            onPress={handleCancelPress}
            footnote="Se quiser manter seu empréstimo no Nubank, cancele seu pedido até às 9h do dia 13/07."
          />
        </View>
      )}

      <CancelBottomSheet
        visible={flowStep === 'cancel-reason'}
        onClose={handleSheetClose}
        onConfirm={handleReasonConfirm}
      />

      <PinCodeSheet
        visible={flowStep === 'pin-code'}
        onClose={handleSheetClose}
        onComplete={handlePinComplete}
      />

      <ConditionsBottomSheet
        visible={showConditions}
        onClose={() => setShowConditions(false)}
        onSimulate={() => setShowConditions(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  calloutSection: {
    paddingBottom: spacing.x6,
  },
  listSection: {
    paddingBottom: spacing.x6,
  },
  linkSection: {
    paddingHorizontal: spacing.x6,
    paddingTop: spacing.x3,
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timelineSection: {
    paddingHorizontal: spacing.x6,
    paddingVertical: spacing.x6,
  },
  infoSection: {
    backgroundColor: colors.background.subtle,
    paddingVertical: spacing.x6,
  },
  loadingScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background.default,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
  },
});
