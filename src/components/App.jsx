import { GlobalStyle } from 'GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from './Filter/Filter.jsx';
import { useState, useEffect } from 'react';

const getInitialContacts = () => {
  if (localStorage.getItem('contacts') !== null) {
    return JSON.parse(localStorage.getItem('contacts'));
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = cardId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== cardId)
    );
  };

  const filterContacts = value => {
    setFilter(value);
  };

  const getFilteredContactsList = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter onFilter={filterContacts} />
      <ContactList
        contacts={getFilteredContactsList()}
        onDelete={deleteContact}
      />
      <GlobalStyle />
    </div>
  );
};
