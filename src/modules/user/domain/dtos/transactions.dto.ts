export interface TransactionOutputDto {
  id: number;
  user: {
    profilePic: string;
    name: string;
  };
  currency: string;
  date: string;
  type: 'received' | 'sended';
}
