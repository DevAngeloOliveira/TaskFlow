import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { projectsService } from '../../services';
import type { Project } from '../../types/project';
import ProjectModal from '../../components/ProjectModal';
import MembersModal from '../../components/MembersModal';
import LoadingSpinner from '../../components/LoadingSpinner';

const Projects = () => {
  const queryClient = useQueryClient();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => projectsService.getProjects().then((res) => res.data),
  });

  const deleteMutation = useMutation({
    mutationFn: (projectId: string) => projectsService.deleteProject(projectId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  const handleEditProject = (project: Project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const handleAddMembers = (project: Project) => {
    setSelectedProject(project);
    setShowMembersModal(true);
  };

  const handleCreateProject = () => {
    setSelectedProject(null);
    setShowProjectModal(true);
  };

  const handleCloseModals = () => {
    setShowProjectModal(false);
    setShowMembersModal(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'in_progress':
        return 'bg-green-500/20 text-green-200';
      case 'completed':
        return 'bg-gray-300/20 text-gray-100';
      case 'on_hold':
        return 'bg-yellow-500/20 text-yellow-200';
      case 'cancelled':
        return 'bg-red-500/20 text-red-200';
      default:
        return 'bg-gray-500/20 text-gray-200';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold gradient-text">Projects</h1>
        <button
          onClick={handleCreateProject}
          className="flex items-center glass-button"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="glass-card">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-medium text-white/90">{project.name}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                {formatStatus(project.status)}
              </span>
            </div>

            <p className="mb-4 text-sm text-white/70 line-clamp-2">
              {project.description || 'No description provided'}
            </p>

            <div className="flex items-center justify-between mb-4 text-xs text-white/60">
              <span>{project.members?.length || 0} members</span>
              <span>
                {new Date(project.startDate).toLocaleDateString()} -{' '}
                {project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Ongoing'}
              </span>
            </div>

            <div className="flex mb-4 -space-x-2">
              {project.members?.slice(0, 5).map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-center w-8 h-8 border-2 border-gray-900 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  title={member.name}
                >
                  <span className="text-xs font-medium text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
              ))}
              {(project.members?.length || 0) > 5 && (
                <div className="flex items-center justify-center w-8 h-8 bg-gray-800 border-2 border-gray-900 rounded-full">
                  <span className="text-xs font-medium text-white">
                    +{project.members!.length - 5}
                  </span>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-4 space-x-2 border-t border-white/10">
              <button
                onClick={() => handleEditProject(project)}
                className="text-sm glass-button"
              >
                Edit
              </button>
              <button
                onClick={() => handleAddMembers(project)}
                className="text-sm glass-button"
              >
                Members
              </button>
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this project?')) {
                    deleteMutation.mutate(project.id);
                  }
                }}
                className="text-sm text-red-400 glass-button hover:text-red-300"
                disabled={deleteMutation.isLoading}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showProjectModal && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModals}
        />
      )}

      {showMembersModal && selectedProject && (
        <MembersModal
          project={selectedProject}
          onClose={handleCloseModals}
        />
      )}
    </div>
  );
};

export default Projects; 