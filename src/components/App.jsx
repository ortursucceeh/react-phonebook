import { Component } from "react";
import css from './App.module.css';
import Phonebook from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
import Contacts from "./Contacts/Contacts";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }

  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    }
    console.log('Creating user', newUser)
    this.setState(prevState => ({ ...prevState, contacts: prevState.contacts.concat([newUser]) }))
    console.log('this.state.contacts :>> ', this.state.contacts);
  }

  render() {
    return (<div className={css['app__wrapper']}>
      <Phonebook createUser={this.createUser} />
      <Contacts contacts={this.state.contacts}/>
    </div>)
  }
}
