import { Contact } from 'types/types';
import { sortStatuses } from './constants';

export interface IContactsInitialState {
  contacts: Contact[];
  isLoading: boolean;
  error: null | string;
}

export interface IFilterInitialState {
  filter: string;
}

export interface ISortInitialState {
  status: keyof typeof sortStatuses;
}

export interface IUserInitialState {
  name: string | null;
  email: string | null;
  token: string | null;
  isLoading: boolean;
  error: null | string;
}

export const contactsInitialState: IContactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const filterInitialState: IFilterInitialState = {
  filter: '',
};

export const userInitialState: IUserInitialState = {
  name: '',
  email: '',
  token: '',
  isLoading: false,
  error: '',
};

export const sortInitialState: ISortInitialState = {
  status: sortStatuses.nameAsc,
};
