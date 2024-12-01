import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { UserPlus, UserMinus } from 'lucide-react';
import { projectsService, usersService } from '../../services';
import type { Project } from '../../types/api';
import LoadingSpinner from '../LoadingSpinner';
import Modal from '../Modal';

interface MembersModalProps {
  project: Project;
  onClose: () => void;
}

const MembersModal = ({ project, onClose }: MembersModalProps) => {
  const queryClient = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => usersService.getUsers().then((res) => res.data),
  });

  const addMemberMutation = useMutation({
    mutationFn: (userId: string) => projectsService.addMember(project.id, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  const removeMemberMutation = useMutation({
    mutationFn: (userId: string) => projectsService.removeMember(project.id, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const projectMemberIds = project.members?.map((member) => member.id) || [];

  return (
    <Modal title="Project Members" onClose={onClose}>
      <div className="space-y-6">
        {/* Current Members */}
        <div>
          <h3 className="text-lg font-medium text-white/90 mb-4">Current Members</h3>
          <div className="space-y-3">
            {project.members?.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-3 glass rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90">{user.name}</p>
                    <p className="text-xs text-white/60">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeMemberMutation.mutate(user.id)}
                  disabled={removeMemberMutation.isLoading}
                  className="p-1 text-red-600 hover:text-red-800"
                  title="Remove member"
                >
                  <UserMinus size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Available Users */}
        <div>
          <h3 className="text-lg font-medium text-white/90 mb-4">Available Users</h3>
          <div className="space-y-3">
            {users
              .filter((user) => !projectMemberIds.includes(user.id))
              .map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 glass rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">{user.name}</p>
                      <p className="text-xs text-white/60">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => addMemberMutation.mutate(user.id)}
                    disabled={addMemberMutation.isLoading}
                    className="p-1 text-indigo-600 hover:text-indigo-800"
                    title="Add member"
                  >
                    <UserPlus size={18} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MembersModal; 