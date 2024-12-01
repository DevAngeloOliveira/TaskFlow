import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Folder,
  CheckSquare,
  Users,
  Settings,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Projects', to: '/projects', icon: Folder },
  { name: 'Tasks', to: '/tasks', icon: CheckSquare },
  { name: 'Team', to: '/team', icon: Users },
  { name: 'Settings', to: '/settings', icon: Settings },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-black/20 backdrop-blur-xl border-r border-white/10">
      <div className="flex flex-col h-full px-4 py-6">
        {/* Logo */}
        <div className="flex items-center mb-8 px-2">
          <h1 className="text-2xl font-bold gradient-text">
            TaskFlow
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to || 
              (item.to !== '/' && location.pathname.startsWith(item.to));
              
            return (
              <NavLink
                key={item.name}
                to={item.to}
                className={`flex items-center px-3 py-2 rounded-lg transition-all duration-300 group ${
                  isActive
                    ? 'bg-green-500/20 text-white'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-green-400' : ''
                }`} />
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Quick Stats */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="glass p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <h3 className="text-sm font-medium text-white/80 mb-3">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-semibold gradient-text animate-pulse-soft">
                  12
                </div>
                <div className="text-xs text-white/60">Active Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold gradient-text animate-pulse-soft">
                  5
                </div>
                <div className="text-xs text-white/60">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 