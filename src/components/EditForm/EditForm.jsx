import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { selectCurrentTodo, editTodo, updateCurrentTodo } from '../../redux/todosSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);
  const handleEdit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;

    if (text.trim() === '') {
      return;
    }

    const todo = {
      id: currentTodo.id,
      text,
    };

    dispatch(updateCurrentTodo(todo));
    form.reset();
  }
  return (
    <form className={style.form} onSubmit={handleEdit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={() => dispatch(editTodo(null))}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
