import React, { useState, useEffect } from 'react';
import type { Todo } from '../types/projectTypes';

const TodoComponent = () => {
  // State can be Todo or null initially
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Response data ko Todo type ke roop mein cast karein
        const data: Todo = await response.json();
        setTodo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h3>Task: {todo?.title}</h3>
      <p>Status: {todo?.completed ? "Completed ✅" : "Pending ⏳"}</p>
    </div>
  );
};

export default TodoComponent;