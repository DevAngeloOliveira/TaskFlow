import { Task } from '../../types/task';
import { formatDate } from '../../utils/date';

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

const KanbanColumn = ({ title, tasks, onTaskClick }: KanbanColumnProps) => {
  const priorityCount = {
    high: tasks.filter((task) => task.priority === 'high').length,
    medium: tasks.filter((task) => task.priority === 'medium').length,
    low: tasks.filter((task) => task.priority === 'low').length,
  };

  return (
    <div className="glass-card flex flex-col h-[calc(100vh-12rem)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <span className="text-sm text-white/60">{tasks.length}</span>
      </div>

      <div className="flex gap-2 mb-4">
        {Object.entries(priorityCount).map(([priority, count]) => (
          <div
            key={priority}
            className="glass px-2 py-1 rounded-lg text-xs text-white/70"
            title={`${priority} priority`}
          >
            {priority}: {count}
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => onTaskClick(task)}
            className="glass p-4 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            <h4 className="text-sm font-medium text-white/90 mb-2">{task.title}</h4>
            <p className="text-xs text-white/70 line-clamp-2 mb-2">
              {task.description}
            </p>
            <div className="flex justify-between items-center text-xs text-white/60">
              <span className={`px-2 py-1 rounded-full ${
                task.priority === 'high'
                  ? 'bg-red-100 text-red-800'
                  : task.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {task.priority}
              </span>
              <span>{task.dueDate ? formatDate(task.dueDate) : 'No due date'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn; 