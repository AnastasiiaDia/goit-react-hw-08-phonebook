import { useGetContactsQuery } from 'redux/contactsReducer.js';
import Contact from '../Contact/Contact.jsx';
import { Ul } from './ContactList.styled.js';
import { useState } from 'react';
import { InputSearch } from 'components/Form/FormElements.styled.js';

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  const [filterValue, setFilterValue] = useState('');
  const onChangeFilter = event => {
    setFilterValue(event.target.value);
  };
  const filteredContact = data?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <>
      {data?.length > 0 && (
        <InputSearch
          type="text"
          name="filter"
          onChange={onChangeFilter}
          placeholder="Search your contact"
        />
      )}
      <Ul>
        {filteredContact?.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </Ul>
    </>
  );
};
