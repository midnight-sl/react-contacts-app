import React from 'react';
import { capitalize } from '../helpers/capitalize'

const ContactList = (props) => {
  const { handleEdit, contacts } = props;
  return(
    <>
      <h1>Contacts list</h1>
      <ul className="contact-list">
        {contacts.map((contact, index) => {
          return(
            <li key={Math.random()} className="contact" onClick={() => handleEdit(contact, index)}>
              <p>{`${capitalize(contact.name.first)} ${capitalize(contact.name.last)}`}</p>
            </li>
          );
        })
      }
      </ul>
    </>
  )
}

export default ContactList;