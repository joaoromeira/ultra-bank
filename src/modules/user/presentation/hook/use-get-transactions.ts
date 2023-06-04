import { GetTransactions } from '../../use-cases/get-transactions';

export const useGetTransactions = () => {
  return new GetTransactions().execute();
};
