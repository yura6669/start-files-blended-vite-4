import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/todosSlice';

const Todo = ({ todo, counter }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO # {counter}
    </Text>

      <Text>{ todo.text }</Text>
    <button className={style.deleteButton} type="button" onClick={() => dispatch(deleteTodo(todo.id))}>
      <RiDeleteBinLine size={24} />
    </button>
    <button className={style.editButton} type="button" onClick={() => dispatch(editTodo(todo))}>
      <RiEdit2Line size={24} />
    </button>
  </div>
  );
};

export default Todo;
