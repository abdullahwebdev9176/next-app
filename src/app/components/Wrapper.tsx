'use client'

import React, { useState } from 'react'
import ParentNewTsFile from './ParentNewTsFile'
import TodoComponent from './TodoComponent'
import UserProfile from './UserProfile'

import TaskItem from '../components/TaskItem';
import type { Task } from '../types/task';

const Wrapper = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTitle, setInputTitle] = useState('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: inputTitle,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInputTitle('');
  };

  const handleToggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };


  return (
    <div className='text-center'>

      <div style={{ padding: '20px' }}>
        <h1 className='mb-3'>My Type-Safe Task Manager</h1>

        <form onSubmit={handleAddTask}>
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            className='px-5 py-3 border boder-gray-400 rounded-md w-full mb-3'
            placeholder="Add new task..."
          />
          <button type="submit" className='cursor-pointer px-5 py-2 bg-blue-500 text-white rounded-md'>Add Task</button>
        </form>

        <div style={{ marginTop: '20px' }}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={handleToggleTask} />
          ))}
        </div>
      </div>


      {/* <NewForm /> */}
      {/* <ParentNewTsFile /> */}
      {/* <TodoComponent /> */}
      {/* <UserProfile /> */}
    </div>
  )
}

export default Wrapper