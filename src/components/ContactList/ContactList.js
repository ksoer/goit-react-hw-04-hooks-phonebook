import PropTypes from "prop-types";
import st from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={st.TaskList}>
    {contacts.map(({id, name, number} ) => (
      <li className = {st.TaskList_item}key={id}>
          <p>
            <b>{name}</b>
            <em>{number}</em>
          </p>
        
          <button
            className={st.TaskList_button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;