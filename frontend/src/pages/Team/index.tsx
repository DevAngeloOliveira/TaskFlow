import { useQuery } from '@tanstack/react-query';
import { Mail, Phone, UserPlus } from 'lucide-react';
import { usersService } from '../../services';
import type { User } from '../../types/api';
import LoadingSpinner from '../../components/LoadingSpinner';

const Team = () => {
  const { data: users = [], isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => usersService.getUsers().then((res) => res.data),
  });

  const roleColors = {
    admin: 'bg-purple-100 text-purple-800',
    manager: 'bg-blue-100 text-blue-800',
    collaborator: 'bg-green-100 text-green-800',
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen={false} />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Member
        </button>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-lg font-medium text-indigo-600">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {user.name}
                </h3>
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                    roleColors[user.role]
                  }`}
                >
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Mail className="h-4 w-4 mr-2" />
                {user.email}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Phone className="h-4 w-4 mr-2" />
                {/* TODO: Add phone number to user model */}
                Not available
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-sm text-indigo-600 hover:text-indigo-700">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team; 