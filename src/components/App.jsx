import { useSelector } from "react-redux";
import { getContacts } from "../redux/AppSlice";

import ContactList from "./Contact/ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import css from './App.module.css';

export function App() {
  const contacts = useSelector(getContacts)

  return (
    <div className={css.app}>
      <h1>Phonebook📘</h1>
      <ContactForm />
      <h2>Contacts👁‍🗨</h2>
      {contacts.length > 0 && <Filter />}
      <hr />
      {contacts.length > 0 ? <ContactList />  : "You don't have any contact yet🙃"}
    </div>
  )
}
