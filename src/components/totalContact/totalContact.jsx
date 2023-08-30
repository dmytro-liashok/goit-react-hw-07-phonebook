import { useSelector } from 'react-redux';
import { selectorFilteredContacts } from 'redux/contactsSlice';
import { selectorFilter } from 'redux/filterSlice';

export function TotalContacts() {
  const filteredContacts = useSelector(selectorFilteredContacts);
  const filter = useSelector(selectorFilter);
  const paragraphStyle = {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '500',
    margin: '0',
    marginBottom: '10px',
  };
  return (
    <>
      {!filter ? (
        <p style={paragraphStyle}>
          The number of contacts is {filteredContacts.length}
        </p>
      ) : (
        <p style={paragraphStyle}>
          The find number of contacts is {filteredContacts.length}
        </p>
      )}
    </>
  );
}
