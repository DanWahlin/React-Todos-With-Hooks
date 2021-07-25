import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';

function Todo({ todo, index, completeTodo, removeTodo }) {
  const { theme } = useContext(ThemeContext);

    return (
      <div
        className={`todo ${theme}-todo-bg`}
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        {todo.text}    
        <div>
          { !todo.isCompleted && <button onClick={() => completeTodo(index)}>Complete</button> }
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
}

export default Todo;