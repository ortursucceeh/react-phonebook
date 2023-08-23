import { RootState } from './../store';
import { sortStatuses } from '../constants';
import { memoize } from 'proxy-memoize';

export const selectContacts = (state: RootState) => state.contacts.contacts;

export const selectFilter = (state: RootState) => state.filter.filter;

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;

export const selectError = (state: RootState) => state.contacts.error;

export const selectFilteredContacts = (state: RootState) => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);
  return filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
};

export const selectSortStatus = (state: RootState) => state.sort.status;

export const selectSortedContacts = memoize((state: RootState) => {
  const sortStatus = selectSortStatus(state);
  const contacts = selectFilteredContacts(state);

  switch (sortStatus) {
    case sortStatuses.nameAsc:
      return [...contacts].sort((a, b) => (a.name > b.name ? 1 : -1));
    case sortStatuses.nameDesc:
      return [...contacts].sort((a, b) => (a.name > b.name ? -1 : 1));
    default:
      return contacts;
  }
});
