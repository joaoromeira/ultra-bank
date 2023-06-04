import {
  Avatar,
  SafeAreaView,
  Text,
  View,
} from '@core/presentation/components';

import { Balance } from '../../components/balance/balance';
import { MenuFunctions } from '../../components/menu-functions/menu-functions';
import { Profile } from '../../components/profile/profile';
import { Transactions } from '../../components/transactions/transactions';

export const Home = () => {
  return (
    <SafeAreaView flex={1} flexDirection="column" bgColor="black">
      <Profile />
      <Balance />
      <MenuFunctions />
      <Transactions />
    </SafeAreaView>
  );
};
