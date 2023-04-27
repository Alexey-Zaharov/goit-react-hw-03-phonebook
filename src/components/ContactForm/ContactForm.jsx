import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const nameData = {
      name: event.currentTarget.elements.name.value,
      id: nanoid(),
      number: event.currentTarget.elements.number.value.toString(),
    };
    this.props.stateChange(nameData);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.contactForm}>
        <form onSubmit={this.handleSubmit}>
          <label className={css.contactLable}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={css.contactInput}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={css.contactLable}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={css.contactInput}
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  stateChange: PropTypes.func.isRequired,
};

export default ContactForm;
