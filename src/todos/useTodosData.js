import { useState, useEffect } from 'react';
import axios from 'axios';

function useTodosData() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      const url = '/todos.json';
      
      const fetchData = async () => {
        const result = await axios(url);
        setTodos(result.data);
      };

      fetchData();
  }, []);

  return todos;
}

export default useTodosData;