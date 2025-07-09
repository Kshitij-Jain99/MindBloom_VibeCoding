import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, UserIcon, BarChartIcon, BookOpenIcon } from 'lucide-react';
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navItems = [{
    icon: <HomeIcon size={24} />,
    label: 'Home',
    path: '/dashboard'
  }, {
    icon: <BarChartIcon size={24} />,
    label: 'Insights',
    path: '/insights'
  }, {
    icon: <BookOpenIcon size={24} />,
    label: 'Journal',
    path: '/journal'
  }, {
    icon: <UserIcon size={24} />,
    label: 'Profile',
    path: '/profile'
  }];
  return <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full max-w-md mx-auto">
      <div className="flex justify-around items-center">
        {navItems.map(item => <button key={item.path} onClick={() => navigate(item.path)} className={`flex flex-col items-center py-3 px-5 ${isActive(item.path) ? 'text-[#5a4a42]' : 'text-gray-400 hover:text-gray-600'}`}>
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>)}
      </div>
    </nav>;
};
export default Navbar;