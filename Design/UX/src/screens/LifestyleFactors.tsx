import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRightIcon, ArrowLeftIcon, CheckCircle, Star, TreePine, Car, Wifi, Heart } from 'lucide-react';

interface LifestyleFactorsProps {
  onComplete: (data: any) => void;
}

const LifestyleFactors: React.FC<LifestyleFactorsProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dailyRoutine: '',
    exerciseHabits: '',
    socialActivities: '',
    relaxationMethods: [] as string[],
    goals: [] as string[],
    motivations: '',
    personalityPetReady: false
  });

  const relaxationOptions = [
    { id: 'meditation', label: 'Meditation', icon: '🧘‍♀️' },
    { id: 'reading', label: 'Reading', icon: '📚' },
    { id: 'music', label: 'Listening to Music', icon: '🎵' },
    { id: 'walking', label: 'Walking in Nature', icon: '🚶‍♀️' },
    { id: 'breathing', label: 'Deep Breathing', icon: '💨' },
    { id: 'journaling', label: 'Journaling', icon: '✍️' },
    { id: 'yoga', label: 'Yoga', icon: '🤸‍♀️' },
    { id: 'bath', label: 'Taking a Bath', icon: '🛁' }
  ];

  const goalOptions = [
    { id: 'reduce-stress', label: 'Reduce daily stress', icon: '😌' },
    { id: 'better-sleep', label: 'Improve sleep quality', icon: '😴' },
    { id: 'increase-confidence', label: 'Build confidence', icon: '💪' },
    { id: 'manage-anxiety', label: 'Manage anxiety', icon: '🕊️' },
    { id: 'better-relationships', label: 'Improve relationships', icon: '💕' },
    { id: 'work-life-balance', label: 'Better work-life balance', icon: '⚖️' },
    { id: 'self-awareness', label: 'Increase self-awareness', icon: '🔍' },
    { id: 'emotional-regulation', label: 'Manage emotions better', icon: '🎭' }
  ];

  const handleArrayToggle = (field: 'relaxationMethods' | 'goals', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleComplete = () => {
    const completedData = {
      ...formData,
      personalityPetReady: true,
      completedAt: new Date().toISOString(),
      phase1Completed: true
    };
    
    onComplete({ lifestyleFactors: completedData });
    navigate('/assessment/mood');
  };

  const handleBack = () => {
    navigate('/onboarding/health-profile');
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#f8f5f2] to-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={handleBack} className="w-10 h-10 rounded-full border-2 border-[#5a4a42] flex items-center justify-center">
          <ArrowLeftIcon size={20} className="text-[#5a4a42]" />
        </button>
        <h1 className="text-xl font-bold text-[#5a4a42]">Almost Done!</h1>
        <div className="w-10 h-10 opacity-0"></div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-8">
        {/* Progress Celebration */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#f8a978] to-[#f69c62] rounded-full flex items-center justify-center">
            <Star size={36} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#5a4a42] mb-2">You're Amazing!</h2>
          <p className="text-gray-600 mb-6">
            Just a few more questions to personalize your MindBloom experience
          </p>
        </div>

        {/* Relaxation Methods */}
        <div>
          <h3 className="text-xl font-bold text-[#5a4a42] mb-4">What helps you relax?</h3>
          <p className="text-gray-600 mb-4">Select all that apply - we'll suggest similar activities</p>
          <div className="grid grid-cols-2 gap-3">
            {relaxationOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleArrayToggle('relaxationMethods', option.id)}
                className={`p-3 rounded-xl border-2 transition-all text-left ${
                  formData.relaxationMethods.includes(option.id)
                    ? 'border-[#5a4a42] bg-[#f8f5f2] shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-1">{option.icon}</div>
                <span className="text-sm font-medium text-[#5a4a42]">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div>
          <h3 className="text-xl font-bold text-[#5a4a42] mb-4">What are your wellness goals?</h3>
          <p className="text-gray-600 mb-4">Choose your top 3-4 goals for your mental wellness journey</p>
          <div className="space-y-3">
            {goalOptions.map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleArrayToggle('goals', goal.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center space-x-3 ${
                  formData.goals.includes(goal.id)
                    ? 'border-[#5a4a42] bg-[#f8f5f2] shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <span className="text-2xl">{goal.icon}</span>
                <span className="font-medium text-[#5a4a42] text-left">{goal.label}</span>
                {formData.goals.includes(goal.id) && (
                  <CheckCircle size={20} className="text-[#5a4a42] ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Daily Routine */}
        <div>
          <h3 className="text-xl font-bold text-[#5a4a42] mb-4">Describe your typical day</h3>
          <textarea
            value={formData.dailyRoutine}
            onChange={(e) => handleInputChange('dailyRoutine', e.target.value)}
            placeholder="Tell us about your daily routine, work schedule, or any patterns that matter to you..."
            className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#5a4a42] focus:outline-none"
            rows={4}
          />
        </div>

        {/* Motivation */}
        <div>
          <h3 className="text-xl font-bold text-[#5a4a42] mb-4">What motivates you to prioritize your mental wellness?</h3>
          <textarea
            value={formData.motivations}
            onChange={(e) => handleInputChange('motivations', e.target.value)}
            placeholder="This could be family, career goals, personal growth, or anything meaningful to you..."
            className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#5a4a42] focus:outline-none"
            rows={3}
          />
        </div>

        {/* Phase 1 Completion Summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle size={24} className="text-green-600" />
            <h3 className="text-lg font-bold text-green-800">Phase 1 Complete!</h3>
          </div>
          <div className="space-y-2 text-sm text-green-700">
            <p>✓ Personality profile and companion pet selected</p>
            <p>✓ Privacy preferences configured</p>
            <p>✓ Health and life context captured</p>
            <p>✓ Lifestyle factors and goals defined</p>
          </div>
          <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
            <p className="text-sm text-gray-600">
              <strong>Next:</strong> Your companion will begin learning from your daily mood and wellness tracking. 
              The more you engage, the more personalized your experience becomes!
            </p>
          </div>
        </div>
      </div>

      {/* Complete Button */}
      <div className="mt-6">
        <Button 
          onClick={handleComplete} 
          fullWidth 
          icon={<ArrowRightIcon size={20} />}
          className="bg-gradient-to-r from-[#5a4a42] to-[#4a3a32]"
        >
          Begin Your Journey
        </Button>
      </div>
    </div>
  );
};

export default LifestyleFactors;