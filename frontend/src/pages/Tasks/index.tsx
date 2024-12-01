import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { tasksService } from '../../services';
import type { Task } from '../../types/task';
import KanbanColumn from '../../components/KanbanColumn';
import TaskModal from '../../components/TaskModal';
import LoadingSpinner from '../../components/LoadingSpinner';

const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'in_progress', title: 'In Progress' },
  { id: 'in_review', title: 'In Review' },
  { id: 'done', title: 'Done' },
] as const;

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);

  const { data, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await tasksService.getTasks();
      return response.data;
    },
  });

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleAddTask = () => {
    setSelectedTask(undefined);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const tasks = data || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold gradient-text">Tasks</h1>
        <button
          onClick={handleAddTask}
          className="glass-button flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            title={column.title}
            tasks={tasks.filter((task) => task.status === column.id)}
            onTaskClick={handleTaskClick}
          />
        ))}
      </div>

      {isModalOpen && (
        <TaskModal
          task={selectedTask}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Tasks; 