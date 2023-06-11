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

  componentDidMount() {
    this.setState({ contacts:  JSON.parse(localStorage.getItem('contacts'))})
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
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

    this.setState(prevState => ({ contacts: [...prevState.contacts, newUser] }))
    
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  handleFilterChange = ({target: {value}}) => {
    this.setState({
      filter: value,
    })
  }
  
  render() {
    const { contacts, filter } = this.state;

    return (<div className={css['app__wrapper']}>
      <h1 className={css['app__header']}>Phonebook📘</h1>
      <ContactForm createContact={this.createContact} />
      <h2>Contacts👁‍🗨</h2>
      {contacts.length > 0 && <Filter handleFilterChange={this.handleFilterChange} />}
      <hr />
      <Contacts contacts={
        filter
          ? contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()))
          : contacts}
        deleteContact={this.deleteContact} />
    </div>)
  }
}
