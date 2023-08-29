import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { selectorFilter, setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const filterId = nanoid();
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };

  return (
    <>
      <label htmlFor={filterId} className={css.labelFilter}>
        <span className={css.spanFilter}>Find Contacts by name</span>
        <input
          className={css.inputFilter}
          value={filter}
          onChange={handleChange}
          id={filterId}
        />
      </label>
    </>
  );
}
