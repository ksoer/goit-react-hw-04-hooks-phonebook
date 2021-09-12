import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Form from './components/Form/Form'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter.js'



function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

   const addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
  
      if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`🤔 ${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("😱 Enter the contact's name and number phone!");
    } else {
      setContacts(prevContacts =>
        [contact, ...prevContacts].sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        }),
      );
    }
  };



     

  
  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const filterHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter value={filter} onChange={filterHandler} />}
      {contacts.length > 0 ? (
        <ContactList
          contacts={visibleContacts()}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );

}

export default App;