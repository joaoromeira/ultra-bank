import { Text, View } from '@core/presentation/components';
import { Currency } from '@src/core/domain/vos/currency';

export const Balance = () => {
  return (
    <View px={4} pt={8}>
      <Text variant="caption2" color="gray">
        Your balance
      </Text>
      <Text variant="large-title">{Currency.build(1000).getValue()}</Text>
    </View>
  );
};
