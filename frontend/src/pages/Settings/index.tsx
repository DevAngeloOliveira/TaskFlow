import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Settings = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Settings</h3>
          
          <div className="mt-5">
            <div className="rounded-md bg-gray-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-lg font-medium text-indigo-600">
                      {user?.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{user?.name}</h4>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                  <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="btn-primary"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Account Settings</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Manage your account settings and preferences.</p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="btn-secondary"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Manage how you receive notifications.</p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="btn-secondary"
            >
              Configure Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 