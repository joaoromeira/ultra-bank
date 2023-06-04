import { TransactionDto } from '@src/core/domain/dtos/transaction.dto';

import { transactions } from '../data/transactions';

export class DataBase {
  readonly data = transactions;

  public constructor() {}

  public getTransactions(): TransactionDto[] {
    return this.data;
  }
}
