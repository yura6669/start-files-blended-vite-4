import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';

const Form = () => {
  const dispatch = useDispatch();

  const hangleSubmit = e => { 
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.search.value;

    if (text.trim() === '') {
      return;
    }

    const todo = {
      id: nanoid(),
      text,
    };

    dispatch(addTodo(todo));
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={hangleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
