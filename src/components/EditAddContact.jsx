import React from 'react';
import { capitalize } from '../helpers/capitalize';
import '../styles/edit.css';

const EditAddContact = (props) => {
  const { isEdit, chosenContact, handleChange } = props;
  return(
    <div className="user-info"> 
      <h1>{ isEdit ? 'Edit User Info' : 'Add New User' }</h1>
      <input
        placeholder="First Name"
        name="name.first"
        value={ isEdit ? `${capitalize(chosenContact.name.first)}` : ''}
        onChange={e => handleChange(e)}
        />
      <input
        placeholder="Last Name"
        name="name.last"
        value={ isEdit ? `${capitalize(chosenContact.name.last)}` : ''}
        onChange={e => handleChange(e)}
        />
      <input
        placeholder="Email" 
        name="email"
        value={ isEdit ? `${capitalize(chosenContact.email)}` : ''}
        onChange={e => handleChange(e)}
        />
      <input
        placeholder="Phone" 
        name="phone"
        value={ isEdit ? `${capitalize(chosenContact.phone)}` : ''}
        onChange={e => handleChange(e)}
      />
    </div>
  )
}
  
  export default EditAddContact;