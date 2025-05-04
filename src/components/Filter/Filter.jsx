import style from './Filter.module.css';
import { selectFilter, changeFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => { 
    const { value } = e.target;
    dispatch(changeFilter(value));
  };
  const filter = useSelector(selectFilter);
  return <input className={style.input} placeholder="Find it" name="filter" value={filter} onChange={handleChange} />;
};

export default Filter;
