export type Contact = {
  id: number;
  name: string;
  number: string;
};

export type NewContact = Omit<Contact, 'id'>;

export type User = {
  name: string | null;
  email: string | null;
  password: string | null;
  token: string;
};

export enum STATUS_ENUM {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export type UserResponse = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};
