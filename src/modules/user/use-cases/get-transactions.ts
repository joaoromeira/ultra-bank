import { Currency } from '@src/core/domain/vos/currency';
import { DataBase } from '@src/core/infrastructure/db/data-base';

import { TransactionOutputDto } from '../domain/dtos/transactions.dto';

export class GetTransactions {
  public constructor() {}

  public execute(): TransactionOutputDto[] {
    const db = new DataBase();
    const transactions = db.getTransactions();

    const output = transactions.map(({ valueInt, date, ...transaction }) => ({
      ...transaction,
      date: date.toDateString(),
      currency: Currency.build(valueInt / 100).getValue(),
    }));

    return output;
  }
}
