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

  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    }
    this.setState(prevState => ({ ...prevState, contacts: prevState.contacts.concat([newUser]) }))
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
      <h1>Phonebook</h1>
      <ContactForm createUser={this.createUser} />
      <h2>Contacts</h2>
      <Filter onChange={this.handleFilterChange } />
      <hr/>
      <Contacts contacts={this.state.contacts} filter={this.state.filter}/>
    </div>)
  }
}
