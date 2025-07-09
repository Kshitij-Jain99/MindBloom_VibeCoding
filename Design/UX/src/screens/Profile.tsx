import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { UserIcon, SettingsIcon, BellIcon, HelpCircleIcon, LogOutIcon } from 'lucide-react';
const Profile: React.FC = () => {
  const navigate = useNavigate();
  return <div className="flex flex-col h-full bg-[#f8f5f2] pb-16">
      <div className="bg-[#5a4a42] text-white p-8 rounded-b-3xl">
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mr-4">
            <UserIcon size={40} className="text-[#5a4a42]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Alex Johnson</h1>
            <p className="opacity-80">Member since May 2023</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <div className="text-center">
            <div className="text-2xl font-bold">72</div>
            <div className="text-sm opacity-80">Wellness Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">21</div>
            <div className="text-sm opacity-80">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm opacity-80">Badges</div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-[#5a4a42] mb-4">
          Account Settings
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <button className="w-full flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#f8f5f2] flex items-center justify-center mr-3">
                  <UserIcon size={20} className="text-[#5a4a42]" />
                </div>
                <span className="font-medium text-[#5a4a42]">
                  Personal Information
                </span>
              </div>
              <div className="text-gray-400">›</div>
            </button>
            <button className="w-full flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#f8f5f2] flex items-center justify-center mr-3">
                  <BellIcon size={20} className="text-[#5a4a42]" />
                </div>
                <span className="font-medium text-[#5a4a42]">
                  Notifications
                </span>
              </div>
              <div className="text-gray-400">›</div>
            </button>
            <button className="w-full flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#f8f5f2] flex items-center justify-center mr-3">
                  <SettingsIcon size={20} className="text-[#5a4a42]" />
                </div>
                <span className="font-medium text-[#5a4a42]">App Settings</span>
              </div>
              <div className="text-gray-400">›</div>
            </button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <button className="w-full flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#f8f5f2] flex items-center justify-center mr-3">
                  <HelpCircleIcon size={20} className="text-[#5a4a42]" />
                </div>
                <span className="font-medium text-[#5a4a42]">
                  Help & Support
                </span>
              </div>
              <div className="text-gray-400">›</div>
            </button>
            <button className="w-full flex items-center justify-between py-2 text-red-500">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <LogOutIcon size={20} className="text-red-500" />
                </div>
                <span className="font-medium">Log Out</span>
              </div>
              <div className="text-gray-400">›</div>
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Button onClick={() => navigate('/assessment/mood')} variant="outline" fullWidth>
          Retake Assessment
        </Button>
      </div>
    </div>;
};
export default Profile;