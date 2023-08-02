import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { addContact } from 'redux/operations/operations';

export function ContactForm() {
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  function hendleChange(evt) {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  }

  function hendleSubmit(evt) {
    evt.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');

    toast.success('Contact added!');
  }

  return (
    <form onSubmit={hendleSubmit}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={hendleChange}
          id={nanoid()}
          pattern="\[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />

      <label>
        Number
        <br />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={hendleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />

      <button type="submit">Add contact</button>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}

ContactForm.prototype = {
  hendleSubmit: PropTypes.func.isRequired,
};
