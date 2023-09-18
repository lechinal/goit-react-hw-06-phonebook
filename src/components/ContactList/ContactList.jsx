import React from 'react';
import styles from './ContactList.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li className={styles.contactList} key={nanoid()}>
            {contact.name}: {contact.number}
            <button
              className={styles.btnList}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
