import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings, LogOut } from 'lucide-react';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';
import { authService } from '../../services';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    await authService.logout();
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left side - Page title */}
        <div className="flex items-center">
          <h2 className="text-lg font-medium text-white/90">Welcome back, <span className="gradient-text">{user?.name}</span>!</h2>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="glass-button p-2 rounded-full relative group">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
            <div className="absolute top-full right-0 mt-2 w-64 glass rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <h3 className="text-sm font-medium gradient-text mb-2">Notifications</h3>
              <div className="space-y-2">
                <div className="text-xs text-white/70">No new notifications</div>
              </div>
            </div>
          </button>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 glass-button rounded-full pr-4"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {user?.name?.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-white/90">
                {user?.name}
              </span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 glass rounded-xl overflow-hidden">
                <div className="py-1" role="menu">
                  <a
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm glass-hover"
                    role="menuitem"
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </a>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm glass-hover text-red-400 hover:text-red-300"
                    role="menuitem"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 