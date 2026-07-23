import React from 'react';
import type { Task, TaskItemProps } from '../types/task';

const TaskItem = ({ task, onToggle }: TaskItemProps) => {
    
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='flex items-center justify-between mb-3'>
      <span className='mr-2'>{task.title}</span>
      <button onClick={() => onToggle(task.id)} className='ml-2 cursor-pointer bg-blue-500 text-white rounded-md px-3 py-1'>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;