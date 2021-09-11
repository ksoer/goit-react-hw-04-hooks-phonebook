import React, { Component } from "react";
import PropTypes from 'prop-types'
import st from './form.module.css'


export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={st.TaskEditor} onSubmit={this.handleSubmit}>
        <label className={st.TaskEditor_label}>
          Name
          <input
            className={st.TaskEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={st.TaskEditor_label}>
          Number
          <input
            className={st.TaskEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
            required
          />
        </label>
        <button className={st.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};