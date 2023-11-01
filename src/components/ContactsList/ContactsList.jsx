import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact, fetchContacts } from 'redux/contactsReducer';
import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const contactsFilter = useSelector(selectVisibleContacts);
  return (
    <ul className={css.list}>
      {contactsFilter.map(contact => {
        const { id, name, phone } = contact;
        return (
          <li className={css.contacts} key={id}>
            <span>{name}:</span>
            <span>{phone}</span>
            <button
              type="button"
              className={css.btnDelete}
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
