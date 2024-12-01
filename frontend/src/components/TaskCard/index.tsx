import { Task, priorityColors, taskStatusColors } from '../../types/task';
import { formatDate } from '../../utils/date';

interface TaskCardProps {
  task: Task;
  onClick?: (task: Task) => void;
}

const TaskCard = ({ task, onClick }: TaskCardProps) => {
  return (
    <div
      onClick={() => onClick?.(task)}
      className="glass-card hover:scale-102 transition-all duration-300 cursor-pointer group relative"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-white/90 line-clamp-2 flex-1">
          {task.title}
        </h3>
        <span
          className={`ml-2 px-2 py-1 text-xs rounded-full ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="text-xs text-white/70 line-clamp-2 mb-4">
          {task.description}
        </p>
      )}

      <div className="flex justify-between items-center text-xs text-white/60">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full ${taskStatusColors[task.status]} mr-2`} />
          <span>{task.status}</span>
        </div>
        <span>{task.dueDate ? formatDate(task.dueDate) : 'No due date'}</span>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl" />
      </div>
    </div>
  );
};

export default TaskCard; 