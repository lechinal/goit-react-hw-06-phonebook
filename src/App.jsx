import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Paper from './components/Paper/Paper';

export const App = () => {
  // Verificam daca exista deja date salvate in localStorage
  const storedContacts = localStorage.getItem('contacts');
  const initialContacts = storedContacts ? JSON.parse(storedContacts) : [];

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // useEffect se declanseaza o singura data la incarcarea componentei
  useEffect(() => {
    // Salvam in localStorage lista de contacte
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); // Se activeaza doar cand contacts se modifica

  const handleAddContact = (name, number) => {
    //  Verificam daca contactul exista deja in lista din state
    const existingContact = contacts.find(
      contact => contact.name === name || contact.number === number
    );

    if (existingContact) {
      alert(`"${name}" is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    // Actualizam lista de contacte din state
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = id => {
    // Filtram lista de contacte pentru a exclude contactul cu id-ul specificat
    const updatedContacts = contacts.filter(contact => contact.id !== id);

    // Actualizam lista de contacte din state
    setContacts(updatedContacts);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <Paper>
        <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      </Paper>
      <Paper>
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter filter={filter} onFilterChange={setFilter} />
        <ContactList
          contacts={contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )}
          onDeleteContact={handleDeleteContact}
        />
      </Paper>
    </div>
  );
};

export default App;
