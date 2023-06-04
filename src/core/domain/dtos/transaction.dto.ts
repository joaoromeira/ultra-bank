export interface TransactionDto {
  id: number;
  user: {
    profilePic: string;
    name: string;
  };
  valueInt: number;
  date: Date;
  type: 'received' | 'sended';
}
