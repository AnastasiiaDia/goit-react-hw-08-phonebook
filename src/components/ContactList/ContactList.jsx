import { useGetContactsQuery } from 'redux/contactsReducer.js';
import Contact from '../Contact/Contact.jsx';
import { Ul } from './ContactList.styled.js';

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  return (
    <Ul>
      {data?.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </Ul>
  );
};
