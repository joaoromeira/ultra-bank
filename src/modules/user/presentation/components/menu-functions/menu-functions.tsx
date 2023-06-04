import { useRef } from 'react';

import { Pressable, Text, View } from '@core/presentation/components';
import { Ionicons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

import { PayModal } from './pay-modal/pay-modal';
import { ReplenishModal } from './replenish-modal/replenish-modal';
import { TransferModal } from './transfer-modal/transfer-modal';

type TargetModal = 'pay' | 'transfer' | 'replenish';

export const MenuFunctions = () => {
  const payModalRef = useRef<Modalize>(null);
  const transferModalRef = useRef<Modalize>(null);
  const replenishModalRef = useRef<Modalize>(null);

  const openModal = (target: TargetModal) => {
    if (target === 'pay') return payModalRef.current?.open();

    if (target === 'transfer') return transferModalRef.current?.open();

    return replenishModalRef.current?.open();
  };

  return (
    <>
      <View px={4} pt={8}>
        <View
          bgColor="gray6"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p={8}
          borderRadius={8}
        >
          <Pressable
            flex={1}
            justifyContent="center"
            alignItems="center"
            borderRightColor="gray3"
            borderRightWidth={1}
            onPress={() => openModal('pay')}
          >
            <Ionicons name="wallet-outline" size={32} color="white" />
            <Text variant="caption2">Pay</Text>
          </Pressable>
          <Pressable
            flex={1}
            justifyContent="center"
            alignItems="center"
            borderRightColor="gray3"
            borderRightWidth={1}
            onPress={() => openModal('transfer')}
          >
            <Ionicons name="arrow-forward" size={32} color="white" />
            <Text variant="caption2">Transfer</Text>
          </Pressable>
          <Pressable
            flex={1}
            justifyContent="center"
            alignItems="center"
            onPress={() => openModal('replenish')}
          >
            <Ionicons name="add" size={32} color="white" />
            <Text variant="caption2">Replenish</Text>
          </Pressable>
        </View>
      </View>
      <PayModal modalRef={payModalRef} />
      <TransferModal modalRef={transferModalRef} />
      <ReplenishModal modalRef={replenishModalRef} />
    </>
  );
};
