import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import EditForm from './components/EditForm/EditForm';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from './redux/todosSlice';

export const App = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {currentTodo == null ? (<Form />): (<EditForm />)}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
