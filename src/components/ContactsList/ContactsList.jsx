import { Loader } from 'components/Loader/Loader';
import css from './ContactsList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorError,
  selectorIsLoading,
  selectorContacts,
} from 'redux/contactsSlice';
import { selectorFilter } from 'redux/filterSlice';
import { requestContacts, requestDeleteContact } from 'redux/operations';

const ContactsList = () => {
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      {contacts.length > 0 && !isLoading && (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={css.itemContact}>
              <p>
                {contact.name}: <span>{contact.phoneNumber}</span>
              </p>
              <button
                className={css.btnDelete}
                type="button"
                onClick={() => {
                  dispatch(requestDeleteContact(contact.id));
                }}
              >
                <span className={css.text}>Delete</span>
                <span className={css.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
