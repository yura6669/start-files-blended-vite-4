import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import Todo from "../Todo/Todo";
import Text from "../Text/Text";
import { selectFilteredTodos, selectTodos } from "../../redux/todosSlice";
import { useSelector } from "react-redux";

const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);
  const todos = useSelector(selectTodos);
  let message = '';
  if (todos.length === 0) {
    message = 'Create your first todo😉';
  }
  if (filteredTodos.length === 0 && todos.length > 0) { 
    message = 'No matches found';
  }
  return (
    <>
      
        <Grid>
        {filteredTodos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo todo={todo} counter={index + 1} />
          </GridItem>
          ))}
      </Grid>
      <Text textAlign="center">{ message }</Text>
    </>
  );
};

export default TodoList;
