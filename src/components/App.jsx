import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const prevContacts = useRef(contacts);

  useEffect(function () {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) setContacts(contacts)
  }, [])

  useEffect(() => {
    if (prevContacts.current !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    prevContacts.current = contacts;
  }, [contacts]);

  const createContact = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    }
    
    if (contacts.some(contact => contact.name === newUser.name)) {
      alert(`${newUser.name} already in contacts.`)
      return
    }
    
    setContacts(prevContacts => ([...prevContacts, newUser] ))
  }

  const deleteContact = (id) => {
    setContacts(prevContacts => (prevContacts.filter(contact => contact.id !== id)))
  }

  const handleFilterChange = ({target: {value}}) => {
    setFilter(value)
  }
  
  const getFilteredContacts = () => {
    if (filter) return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    return contacts
  }

  return (<div className={css.app}>
    <h1>Phonebook📘</h1>
    <ContactForm createContact={createContact} />
    <h2>Contacts👁‍🗨</h2>
    {contacts.length > 0 && <Filter handleFilterChange={handleFilterChange} />}
    <hr />
    <Contacts contacts={getFilteredContacts()} deleteContact={deleteContact} />
  </div>)
}
