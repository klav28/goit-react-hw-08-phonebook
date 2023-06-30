import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { SearchForm } from '../components/SearchForm/SearchForm';

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
    </>
  );
}
