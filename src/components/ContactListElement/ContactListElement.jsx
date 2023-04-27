import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactListElement.module.css';

const ContactListElement = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.contactListItem}>
      {name}: {number}
      <button
        className={css.contactListButton}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListElement;
