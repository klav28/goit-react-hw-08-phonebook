import { Helmet } from 'react-helmet';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
// import { SearchForm } from '../components/SearchForm/SearchForm';
import { selectUser } from 'store/authSelectors';
import { useSelector } from 'react-redux';

export default function ContactsPage() {
  const userName = useSelector(selectUser).name;
  return (
    <>
      <Helmet>
        <title>{userName} Contacts</title>
      </Helmet>
      <ContactForm />
      {/* <SearchForm /> */}
      <ContactList />
    </>
  );
}
