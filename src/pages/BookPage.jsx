import { toast } from 'react-toastify';
import { Button, FormEl, Input } from '../components/Form/FormElements.styled';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsReducer';
import { successSettings } from 'utilits/toastifySettings';
import { useRef } from 'react';
import { setAuthHeader } from 'redux/authReducer';
import { ContactList } from 'components/ContactList/ContactList';

function BookPage() {
  const token = useRef(localStorage.getItem('token'));
  setAuthHeader(token.current);
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const addedContact = { name, number };

    event.target.reset();

    if (data.some(({ name }) => addedContact.name === name)) {
      return alert(`${addedContact.name} is alrady in your contacts`);
    }

    addContact(addedContact);
    toast.success(
      `${addedContact.name} is now in your contacts 🤍`,
      successSettings
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <FormEl onSubmit={onFormSubmit}>
        <span>Name</span>
        <Input type="text" name="name" required placeholder="Diana Ivanova" />
        <span>Number</span>
        <Input type="tel" name="number" required placeholder="123-45-67" />
        <Button type="submit">Add contact</Button>
      </FormEl>
      <ContactList />
    </>
  );
}
export default BookPage;
