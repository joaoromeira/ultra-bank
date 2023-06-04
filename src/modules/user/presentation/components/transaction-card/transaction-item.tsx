import { Avatar, Text, View } from '@core/presentation/components';
import { TransactionOutputDto } from '@src/modules/user/domain/dtos/transactions.dto';

interface TransactionItemProps {
  data: TransactionOutputDto;
}

export const TransactionItem = ({ data }: TransactionItemProps) => {
  const { currency, date, type, user } = data;

  return (
    <View flex={1} flexDirection="row" alignItems="center" gap={2} mb={8}>
      <Avatar source={{ uri: user.profilePic }} />
      <View flex={1}>
        <View flexDirection="row" justifyContent="space-between">
          <Text color="black">{user.name}</Text>
          <Text color={type === 'received' ? 'green' : 'red'}>
            {type === 'received' ? '+' : '-'}
            {currency}
          </Text>
        </View>
        <View flexDirection="row" justifyContent="space-between">
          <Text variant="caption2" color="gray">
            {date}
          </Text>
          <Text variant="caption2" color="gray">
            Completed
          </Text>
        </View>
      </View>
    </View>
  );
};
