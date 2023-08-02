import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations/operations';
import { nanoid } from 'nanoid';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  function onDelete(index) {
    dispatch(deleteContact(index));
  }

  function findContact() {
    const normalizedFilter = filters.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const contactsData = findContact();

  return (
    <ul className={css.listContainer}>
      {contactsData.map(({ name, phone, id, country }, index) => (
        <li key={nanoid()} className={css.listItem}>
          <span className={css.contactName}> {name} :</span>
          <span className={css.contactNumber}>{phone} </span>
          <span className={css.contactNumber}>{country} </span>
          <button
            type="button"
            onClick={() => onDelete(id)}
            key={index}
            className={css.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
