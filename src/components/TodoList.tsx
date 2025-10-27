import React from 'react';
import { Task } from '../types';

type TaskListProps = {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 italic">Tidak ada tugas.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center border p-3 rounded shadow-sm"
        >
          <div>
            <p className="font-medium">{task.text}</p>
            <small className="text-gray-500">Prioritas: {task.priority}</small>
          </div>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Hapus
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
