export const getContacts = state => state.phonebook.items;

export const getSortedContacts = state => {
  return getContacts(state)
    .slice()
    .sort((a, b) => (a.contactName < b.contactName ? -1 : 1));
};

export const getIsLoading = state => state.phonebook.isLoading;

export const getError = state => state.phonebook.error;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = state =>
  getSortedContacts(state).filter(el =>
    el.name.toLowerCase().includes(getFilter(state).toLowerCase())
  );

// Auth Selectors

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
