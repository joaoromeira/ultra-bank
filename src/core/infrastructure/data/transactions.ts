import { TransactionDto } from '@src/core/domain/dtos/transaction.dto';

export const transactions: TransactionDto[] = [
  {
    id: 1,
    user: {
      profilePic:
        'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=430&q=80',
      name: 'Amelia Greene',
    },
    valueInt: 12000,
    date: new Date(),
    type: 'sended',
  },
  {
    id: 2,
    user: {
      profilePic:
        'https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      name: 'Ethan Sullivan',
    },
    valueInt: 15000,
    date: new Date(),
    type: 'sended',
  },
  {
    id: 3,
    user: {
      profilePic:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      name: 'Olivia Ramirez',
    },
    valueInt: 100000,
    date: new Date(),
    type: 'received',
  },
];
