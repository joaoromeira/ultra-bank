import { Avatar, Text, View } from '@core/presentation/components';
import { FlatList } from 'react-native';

import { useGetTransactions } from '../../hook/use-get-transactions';
import { TransactionItem } from '../transaction-item/transaction-item';

export const Transactions = () => {
  const transactions = useGetTransactions();

  return (
    <View
      px={8}
      pt={8}
      mt={8}
      height="100%"
      bgColor="white"
      borderTopLeftRadius={24}
      borderTopRightRadius={24}
    >
      <Text variant="title2" mb={8} color="black">
        Transactions
      </Text>
      <FlatList
        data={transactions}
        keyExtractor={(transaction) => transaction.id.toString()}
        renderItem={(transaction) => (
          <TransactionItem data={transaction.item} />
        )}
      />
    </View>
  );
};
