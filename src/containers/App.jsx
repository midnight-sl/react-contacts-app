import React , { Component } from 'react';
import '../styles/App.css';
import ContactList from '../components/ContactList';
import EditAddContact from '../components/EditAddContact'
import { fetchUsers } from '../helpers/api';

class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      chosenContact: '',
      contacts: [],
      contactIndex: '',
    };
  }

  componentDidMount() {
    fetchUsers().then(data => this.setState({ contacts: data.results }));
  }

  changeMode = () => {
  this.setState(state => ({
    editMode: !state.editMode
  }))
  }

  handleEdit = (contact, index) => {
    this.setState({ chosenContact: contact, contactIndex: index }, () => {
      this.changeMode();
    })
  }

  handleChange = e => {
    const { contacts, contactIndex} = this.state;
    const fieldName = e.target.name;
    const changeName = fieldName.split('.').length > 1;
    changeName
    ? contacts[contactIndex][fieldName.split('.')[0]][fieldName.split('.')[1]] = e.target.value
    : contacts[contactIndex][fieldName] = e.target.value;
    this.setState({ contacts });
  }

  render() {
    const { editMode, chosenContact } = this.state;
    return (
      <div className="contact-app">
        { editMode
          ? <EditAddContact
              isEdit={!!chosenContact}
              chosenContact={chosenContact}
              handleChange={this.handleChange}
            />
          : <ContactList
              handleEdit={this.handleEdit}
              {...this.state}
            />
        }
        <button onClick={this.changeMode}>{ editMode ? 'Go Back To Contacts' : '+' }</button>
      </div>
    );
  }
}

export default ContactApp;
