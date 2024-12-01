import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Calendar } from 'lucide-react';
import { projectsService } from '../../services';
import type { Project, ProjectStatus } from '../../types/project';
import Modal from '../Modal';
import LoadingSpinner from '../LoadingSpinner';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: project?.name || '',
    description: project?.description || '',
    status: project?.status || 'in_progress' as ProjectStatus,
    startDate: project?.startDate || '',
    endDate: project?.endDate || '',
  });

  const mutation = useMutation({
    mutationFn: (data: typeof formData) =>
      project
        ? projectsService.updateProject(project.id, data)
        : projectsService.createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <Modal title={project ? 'Edit Project' : 'Create Project'} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
            Project Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="glass-input w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white/90 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="glass-input w-full h-24 resize-none"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-white/90 mb-1">
            Status
          </label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as ProjectStatus })}
            className="glass-select w-full"
          >
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="on_hold">On Hold</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-white/90 mb-1">
              Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="startDate"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="glass-input w-full pl-10"
                required
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            </div>
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-white/90 mb-1">
              End Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="endDate"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="glass-input w-full pl-10"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={mutation.isLoading}
            className="glass-button bg-purple-500/20 hover:bg-purple-500/30"
          >
            {mutation.isLoading ? (
              <LoadingSpinner />
            ) : project ? (
              'Update Project'
            ) : (
              'Create Project'
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ProjectModal; 