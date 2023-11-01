import css from './ContactForm.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsReducer';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  const handleAddContact = userContacts => {
    const hasDuplicateContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === userContacts.name.toLowerCase() ||
        contact.phone === userContacts.phone
    );

    if (hasDuplicateContacts) {
      alert(
        `${userContacts.name} or ${userContacts.phone} is already in contacts`
      );
      return;
    }
    dispatch(addContact(userContacts));
  };

  const [data, setData] = useState({ name: '', phone: '' });
  const { name, phone } = data;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const userContacts = {
      name: name,
      phone: phone,
    };

    handleAddContact(userContacts);
    setData({ name: '', phone: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          placeholder="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.formInput}
        />
      </label>
      <label>
        <input
          type="tel"
          value={phone}
          onChange={handleInputChange}
          name="phone"
          placeholder="Number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.formInput}
        />
      </label>
      <button className={css.btnDelete}>Add contact</button>
    </form>
  );
};
