import StyledList from './ContactList.component';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../store/operations';
import {
  getFilteredContacts,
  getError,
  getIsLoading,
} from '../../store/selectors';

import Container from '../Container/Container';
import { BsXSquare } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  // const contacts = useSelector(getSortedContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <StyledList>
        {error && <b>{error}</b>}
        <div class="h-12 bg-slate-400 text-slate-800 font-bold text-center py-2 text-2xl">
          {isLoading ? (
            <p>Loading Contacts...</p>
          ) : (
            <p>
              Contact List
              <span class="text-slate-600 font-light">
                {' '}
                | {contacts.length} items found
              </span>
            </p>
          )}
        </div>
        {contacts.length > 0 && (
          <StyledList.Table>
            <thead>
              <tr>
                <StyledList.Th>Name</StyledList.Th>
                <StyledList.Th>Phone Number</StyledList.Th>
                <StyledList.Th>Delete</StyledList.Th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(el => (
                <StyledList.Tr key={el.id}>
                  <StyledList.Td>{el.name}</StyledList.Td>
                  <StyledList.Td>{el.number}</StyledList.Td>
                  <StyledList.Td>
                    <button
                      onClick={() => dispatch(deleteContact(el.id))}
                      id={el.id}
                    >
                      <IconContext.Provider
                        value={{ color: '#FF8888', size: '18px' }}
                      >
                        <div>
                          <BsXSquare />
                        </div>
                      </IconContext.Provider>
                    </button>
                  </StyledList.Td>
                </StyledList.Tr>
              ))}
            </tbody>
          </StyledList.Table>
        )}
      </StyledList>
    </Container>
  );
};
