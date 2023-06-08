import { Component } from "react";
import { nanoid } from "nanoid";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  createContact = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    }

    if (this.state.contacts.some(contact => contact.name === newUser.name)) {
      alert(`${newUser.name} already in contacts.`)
      return
    }

    this.setState(prevState => ({ ...prevState, contacts: prevState.contacts.concat([newUser]) }))
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  handleFilterChange = evt => {
    const { value } = evt.target;
    console.log('value :>> ', value);
    this.setState(prevState => ({
      ...prevState,
      filter: value,
    }))
  }
  
  render() {
    return (<div className={css['app__wrapper']}>
      <h1 className={css['app__header']}>Phonebook📘</h1>
      <ContactForm createContact={this.createContact} />
      <h2>Contacts👁‍🗨</h2>
      <Filter onChange={this.handleFilterChange } />
      <hr/>
      <Contacts contacts={this.state.contacts} filter={this.state.filter} deleteContact={ this.deleteContact }/>
    </div>)
  }
}
