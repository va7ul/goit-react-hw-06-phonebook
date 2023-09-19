import { useSelector } from 'react-redux';
import { ContactListCard } from 'components/ContactListCard/ContactListCard.jsx';
import { List } from './ContactList.styled';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <List>
      {filteredContacts.map(item => (
        <li key={item.id}>
          <ContactListCard item={item} />
        </li>
      ))}
    </List>
  );
};
