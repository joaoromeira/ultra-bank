import { Ref } from 'react';

import { Text, View } from '@core/presentation/components';
import { theme } from '@src/core/presentation/themes/theme';
import { Modalize } from 'react-native-modalize';

interface PayModalProps {
  modalRef: Ref<Modalize>;
}

export const PayModal = ({ modalRef }: PayModalProps) => {
  return (
    <Modalize
      ref={modalRef}
      modalStyle={{ backgroundColor: theme.colors.gray6 }}
    >
      <View p={8}>
        <Text variant="large-title">Pay</Text>
      </View>
    </Modalize>
  );
};
