import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const location = useLocation();
  const showNavbar = location.pathname.includes('/dashboard') || location.pathname.includes('/profile');
  return <div className="flex flex-col w-full min-h-screen bg-[#f8f5f2]">
      {/* Mobile status bar */}
      <div className="flex justify-between items-center p-2 bg-[#f8f5f2]">
        <div className="text-sm font-medium">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 rounded-full bg-[#5a4a42] opacity-70"></div>
          <div className="w-4 h-4 flex items-center">
            <div className="h-2 w-full bg-[#5a4a42] rounded-sm opacity-70"></div>
          </div>
          <div className="w-4 h-4 flex items-center">
            <div className="h-3 w-3 border-2 border-[#5a4a42] rounded-sm opacity-70"></div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <main className="flex-1 w-full max-w-md mx-auto bg-white rounded-t-3xl overflow-hidden shadow-lg">
        {children}
      </main>
      {/* Navigation bar at bottom */}
      {showNavbar && <Navbar />}
    </div>;
};
export default Layout;