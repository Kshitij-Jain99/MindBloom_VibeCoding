import React from 'react';
import { SunIcon, MoonIcon, BrainIcon, TrendingUpIcon } from 'lucide-react';
const Dashboard: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  return <div className="flex flex-col h-full bg-[#f8f5f2] pb-16">
      <div className="bg-[#5a4a42] text-white p-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-2">Good afternoon, Alex</h1>
        <p className="opacity-80">{currentDate}</p>
        <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="flex items-center mb-3">
            <BrainIcon size={20} className="mr-2" />
            <h2 className="font-medium">Your Wellness Score</h2>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold">72</span>
              <span className="text-sm ml-1 opacity-80">/100</span>
            </div>
            <div className="flex items-center text-green-300">
              <TrendingUpIcon size={16} className="mr-1" />
              <span className="text-sm">+4 from last week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-[#5a4a42] mb-4">
          Today's Recommendations
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#a3c9a8] flex items-center justify-center mr-3">
                <SunIcon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#5a4a42]">
                  Morning Meditation
                </h3>
                <p className="text-sm text-gray-500">10 minutes</p>
              </div>
            </div>
            <div className="bg-[#f8f5f2] rounded-lg p-3">
              <p className="text-sm text-[#5a4a42]">
                Based on your sleep patterns, a quick morning meditation would
                help center your thoughts for the day.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#f8a978] flex items-center justify-center mr-3">
                <BrainIcon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#5a4a42]">
                  Thought Reframing
                </h3>
                <p className="text-sm text-gray-500">15 minutes</p>
              </div>
            </div>
            <div className="bg-[#f8f5f2] rounded-lg p-3">
              <p className="text-sm text-[#5a4a42]">
                Your journal entries show negative thought patterns. Try this
                cognitive exercise to shift perspective.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#b8c0ff] flex items-center justify-center mr-3">
                <MoonIcon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-[#5a4a42]">
                  Sleep Improvement
                </h3>
                <p className="text-sm text-gray-500">5 minutes</p>
              </div>
            </div>
            <div className="bg-[#f8f5f2] rounded-lg p-3">
              <p className="text-sm text-[#5a4a42]">
                Your sleep quality has been poor. Try this bedtime routine to
                improve your rest tonight.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-[#5a4a42] mb-4">
          Weekly Progress
        </h2>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-[#5a4a42]">Mood Tracking</h3>
            <button className="text-sm text-[#5a4a42] underline">
              View Details
            </button>
          </div>
          <div className="flex justify-between items-end h-32 mb-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
            // Generate random heights for the chart
            const height = Math.floor(Math.random() * 70) + 30;
            const colors = ['#f87171', '#fb923c', '#fbbf24', '#a3e635', '#4ade80'];
            const colorIndex = Math.floor(height / 20);
            return <div key={day} className="flex flex-col items-center">
                    <div className="w-6 rounded-t-full" style={{
                height: `${height}%`,
                backgroundColor: colors[colorIndex]
              }}></div>
                    <span className="text-xs mt-2 text-gray-500">{day}</span>
                  </div>;
          })}
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;