import { useState } from 'react';
import PropTypes from 'prop-types'
import st from './form.module.css'


function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const handleChange = e => {
    const { name, value } = e.target;

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
  };

const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetInput();
  };

  const  resetInput = () => {
    setName('');
    setNumber('');
  };


    return (
      <form className={st.TaskEditor} onSubmit={handleSubmit}>
        <label className={st.TaskEditor_label}>
          Name
          <input
            className={st.TaskEditor_input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Ivan Pupkin"
            required
          />
        </label>
        <label className={st.TaskEditor_label}>
          Number
          <input
            className={st.TaskEditor_input}
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
            placeholder="+3809873458754"
            required
          />
        </label>
        <button className={st.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }


Form.propTypes = {
  
  onSubmit: PropTypes.func.isRequired,
};
export default Form;