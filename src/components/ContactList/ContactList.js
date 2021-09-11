import PropTypes from "prop-types";
import st from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={st.TaskList}>
    {contacts.map((contact) => (
      <li className = {st.TaskList_item}key={contact.id}>
        {contact.name + ":" + contact.number}
        {
          <button
            className={st.TaskList_button}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}
export default ContactList;