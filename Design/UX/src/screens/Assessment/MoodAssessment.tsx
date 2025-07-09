import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
const MoodAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const moods = [{
    value: 0,
    label: 'Very Unhappy',
    emoji: '😣',
    color: '#f87171'
  }, {
    value: 1,
    label: 'Unhappy',
    emoji: '🙁',
    color: '#fb923c'
  }, {
    value: 2,
    label: 'Neutral',
    emoji: '😐',
    color: '#fbbf24'
  }, {
    value: 3,
    label: 'Happy',
    emoji: '🙂',
    color: '#a3e635'
  }, {
    value: 4,
    label: 'Very Happy',
    emoji: '😄',
    color: '#4ade80'
  }];
  return <div className="flex flex-col h-full bg-white">
      <div className="p-6">
        <div className="flex items-center">
          <button onClick={() => navigate('/onboarding')} className="w-10 h-10 rounded-full border-2 border-[#5a4a42] flex items-center justify-center">
            <ArrowLeftIcon size={20} className="text-[#5a4a42]" />
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold text-[#5a4a42]">Assessment</h2>
          </div>
          <div className="bg-[#f8f5f2] px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-[#5a4a42]">1 OF 7</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-[#5a4a42] mb-12 text-center">
          How would you describe your mood?
        </h1>
        <div className="relative w-full h-48 mb-12">
          {selectedMood !== null && <div className="absolute top-0 left-0 right-0 flex justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">{moods[selectedMood].emoji}</div>
                <div className="text-lg text-[#5a4a42]">
                  I Feel {moods[selectedMood].label}.
                </div>
              </div>
            </div>}
          <div className="absolute bottom-0 w-full">
            <div className="relative h-24">
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-r from-[#f87171] via-[#fbbf24] to-[#4ade80] rounded-full"></div>
              <div className="absolute bottom-0 w-6 h-16 bg-[#5a4a42] rounded-full transform -translate-x-1/2 cursor-pointer" style={{
              left: selectedMood !== null ? `${selectedMood / (moods.length - 1) * 100}%` : '50%'
            }}></div>
              <div className="absolute -bottom-12 w-full flex justify-between px-3">
                {moods.map(mood => <div key={mood.value} className="text-2xl cursor-pointer" onClick={() => setSelectedMood(mood.value)}>
                    {mood.emoji}
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <Button onClick={() => navigate('/assessment/sleep')} fullWidth icon={<ArrowRightIcon size={20} />} disabled={selectedMood === null} className={selectedMood === null ? 'opacity-50 cursor-not-allowed' : ''}>
          Continue
        </Button>
      </div>
    </div>;
};
export default MoodAssessment;