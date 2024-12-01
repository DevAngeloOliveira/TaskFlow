import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-green-950 to-gray-950">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(22,163,74,0.15),rgba(0,0,0,0))]" />
      <Sidebar />
      <Header />
      <main className="pl-64 pt-16 relative">
        <div className="container mx-auto p-6 max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout; 