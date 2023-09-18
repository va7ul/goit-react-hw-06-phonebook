import { GlobalStyle } from 'GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter.jsx';

// const getInitialContacts = () => {
//   if (localStorage.getItem('contacts') !== null) {
//     return JSON.parse(localStorage.getItem('contacts'));
//   }
//   return [];
// };

export const App = () => {
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};
