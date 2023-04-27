import React from 'react';
import PropTypes from 'prop-types';
import ContactListElement from '../ContactListElement';
import css from './ContactList.module.css';

const ContactList = ({ data, deleteContact }) => {
  return (
    <div className={css.contactLiscContainer}>
      <ul>
        {data.map(({ id, name, number }) => {
          return (
            <ContactListElement
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
