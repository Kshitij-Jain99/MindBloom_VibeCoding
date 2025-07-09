import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { ArrowLeftIcon, ArrowRightIcon, ClockIcon } from 'lucide-react';
const SleepAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [selectedQuality, setSelectedQuality] = useState<string | null>(null);
  const qualityOptions = [{
    id: 'excellent',
    label: 'Excellent',
    hours: '7-9 HOURS',
    emoji: '😊',
    color: '#4ade80'
  }, {
    id: 'good',
    label: 'Good',
    hours: '6-7 HOURS',
    emoji: '🙂',
    color: '#a3e635'
  }, {
    id: 'fair',
    label: 'Fair',
    hours: '5 HOURS',
    emoji: '😐',
    color: '#d4d4d4'
  }, {
    id: 'poor',
    label: 'Poor',
    hours: '3-4 HOURS',
    emoji: '🙁',
    color: '#fb923c'
  }, {
    id: 'worst',
    label: 'Worst',
    hours: '<3 HOURS',
    emoji: '😣',
    color: '#f87171'
  }];
  return <div className="flex flex-col h-full bg-white">
      <div className="p-6">
        <div className="flex items-center">
          <button onClick={() => navigate('/assessment/mood')} className="w-10 h-10 rounded-full border-2 border-[#5a4a42] flex items-center justify-center">
            <ArrowLeftIcon size={20} className="text-[#5a4a42]" />
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold text-[#5a4a42]">Assessment</h2>
          </div>
          <div className="bg-[#f8f5f2] px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-[#5a4a42]">2 OF 7</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center p-8">
        <h1 className="text-2xl font-bold text-[#5a4a42] mb-12 text-center">
          How would you rate your sleep quality?
        </h1>
        <div className="w-full space-y-4">
          {qualityOptions.map(option => <div key={option.id} onClick={() => setSelectedQuality(option.id)} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedQuality === option.id ? `border-${option.color} bg-${option.color}/10` : 'border-gray-200 hover:border-gray-300'}`}>
              <div className="flex items-center">
                <div className="mr-4 text-gray-500">
                  <ClockIcon size={20} />
                </div>
                <div>
                  <div className="font-medium text-[#5a4a42]">
                    {option.label}
                  </div>
                  <div className="text-xs text-gray-500">{option.hours}</div>
                </div>
              </div>
              <div className="text-2xl">{option.emoji}</div>
            </div>)}
        </div>
      </div>
      <div className="p-8">
        <Button onClick={() => navigate('/assessment/expression')} fullWidth icon={<ArrowRightIcon size={20} />} disabled={selectedQuality === null} className={selectedQuality === null ? 'opacity-50 cursor-not-allowed' : ''}>
          Continue
        </Button>
      </div>
    </div>;
};
export default SleepAssessment;