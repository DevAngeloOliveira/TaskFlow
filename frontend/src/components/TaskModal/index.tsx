import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Calendar } from 'lucide-react';
import { tasksService } from '../../services';
import type { Task, TaskStatus, TaskPriority } from '../../types/task';
import Modal from '../Modal';

interface TaskModalProps {
  task?: Task;
  onClose: () => void;
}

const initialFormData = {
  title: '',
  description: '',
  status: 'todo' as TaskStatus,
  priority: 'medium' as TaskPriority,
  dueDate: '',
};

const TaskModal = ({ task, onClose }: TaskModalProps) => {
  const [formData, setFormData] = useState(
    task
      ? {
          title: task.title,
          description: task.description,
          status: task.status,
          priority: task.priority,
          dueDate: task.dueDate?.split('T')[0] || '',
        }
      : initialFormData
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: typeof formData) =>
      task
        ? tasksService.updateTask(task.id, data)
        : tasksService.createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title={task ? 'Edit Task' : 'Create Task'}
      size="lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-white/90 mb-1">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="glass-input w-full"
            placeholder="Task title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-white/90 mb-1">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="glass-input w-full h-32 resize-none"
            placeholder="Task description"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as TaskStatus })}
              className="glass-select w-full"
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="in_review">In Review</option>
              <option value="done">Done</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">
              Priority
            </label>
            <select
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value as TaskPriority })}
              className="glass-select w-full"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-sm font-medium text-white/90 mb-1">
            Due Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="glass-input w-full pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="glass-button"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={mutation.isLoading}
            className="glass-button bg-purple-500/20 hover:bg-purple-500/30"
          >
            {mutation.isLoading ? 'Saving...' : task ? 'Update Task' : 'Create Task'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskModal; 