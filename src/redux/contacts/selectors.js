import { sortStatuses } from './../constants';
import { memoize } from 'proxy-memoize';

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);
  return filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
};

export const selectSortStatus = state => state.sort.status;

export const selectSortedContacts = memoize(state => {
  const sortStatus = selectSortStatus(state);
  const contacts = selectFilteredContacts(state);

  switch (sortStatus) {
    case sortStatuses.name:
      return [...contacts].sort((a, b) => (a.name > b.name ? 1 : -1));
    case sortStatuses.createdAt:
      return [...contacts].sort((a, b) =>
        new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1
      );
    default:
      return contacts;
  }
});
