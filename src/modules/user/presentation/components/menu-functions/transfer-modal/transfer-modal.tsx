import { Ref } from 'react';

import { Text, View } from '@core/presentation/components';
import { theme } from '@src/core/presentation/themes/theme';
import { Modalize } from 'react-native-modalize';

interface TransferModalProps {
  modalRef: Ref<Modalize>;
}

export const TransferModal = ({ modalRef }: TransferModalProps) => {
  return (
    <Modalize
      ref={modalRef}
      modalStyle={{ backgroundColor: theme.colors.gray6 }}
    >
      <View p={8}>
        <Text variant="large-title">Transfer</Text>
      </View>
    </Modalize>
  );
};
