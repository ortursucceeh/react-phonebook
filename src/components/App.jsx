import { useEffect, useRef } from "react";
import ContactList from "./Contact/ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import css from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "./AppSlice";

export function App() {
  const contacts = useSelector(getContacts)

  const dispatch = useDispatch();
  // const prevContacts = useRef(contacts)

  // useEffect(function () {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) dispatch(setContacts(contacts))
  // }, [])

  // useEffect(() => {
  //   if (prevContacts.current !== contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  //   prevContacts.current = contacts;
  // }, [contacts]);


  return (
    <div className={css.app}>
      <h1>Phonebook📘</h1>
      <ContactForm />
      <h2>Contacts👁‍🗨</h2>
      {contacts.length > 0 && <Filter />}
      <hr />
      {contacts.length > 0 ? <ContactList />  : 'No contacts found🙃'}
    </div>
  )
}
