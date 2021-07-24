import React, { useState } from "react";
import ThemeContext from "./Theme/ThemeContext";
import Header from "./Header";
import Todo from "./Todos/Todo";
import TodoForm from "./Todos/TodoForm";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const value = { theme, setTheme };
  const [todos, setTodos] = useState([
    {
      text: "Learn about React Hooks",
      isCompleted: false
    },
    {
      text: "Meet with friend",
      isCompleted: false
    },
    {
      text: "Build todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={`app ${theme}-bg`}>
      <ThemeContext.Provider value={value}>
        <Header />
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
