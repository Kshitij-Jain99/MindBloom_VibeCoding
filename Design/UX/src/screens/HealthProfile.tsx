import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRightIcon, ArrowLeftIcon, Heart, Brain, DollarSign, Home, Users, MapPin } from 'lucide-react';

interface HealthProfileProps {
  onComplete: (data: any) => void;
}

const HealthProfile: React.FC<HealthProfileProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    // Health Information
    mentalHealthHistory: '',
    currentConditions: [] as string[],
    medications: '',
    pastTherapy: '',
    stressLevel: '',
    sleepQuality: '',
    exerciseFrequency: '',
    
    // Socioeconomic Information
    incomeLevel: '',
    employmentStatus: '',
    housingStability: '',
    healthInsurance: '',
    educationLevel: '',
    
    // Lifestyle Factors
    familySupport: '',
    socialConnections: '',
    greenSpaceAccess: '',
    safeNeighborhood: '',
    transportAccess: '',
    internetAccess: ''
  });

  const sections = [
    {
      title: 'Health & Wellness',
      icon: <Heart size={24} className="text-red-500" />,
      description: 'Help us understand your current health context',
      optional: true
    },
    {
      title: 'Life Context',
      icon: <DollarSign size={24} className="text-green-500" />,
      description: 'Your life situation helps us provide relevant support',
      optional: true
    },
    {
      title: 'Environment & Support',
      icon: <Home size={24} className="text-blue-500" />,
      description: 'Your environment and support system matter',
      optional: true
    }
  ];

  const conditions = [
    'Anxiety', 'Depression', 'ADHD', 'PTSD', 'Bipolar Disorder', 
    'Eating Disorder', 'OCD', 'Panic Disorder', 'Social Anxiety', 'Other'
  ];

  const handleConditionToggle = (condition: string) => {
    setFormData(prev => ({
      ...prev,
      currentConditions: prev.currentConditions.includes(condition)
        ? prev.currentConditions.filter(c => c !== condition)
        : [...prev.currentConditions, condition]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      onComplete({ healthProfile: formData });
      navigate('/onboarding/lifestyle-factors');
    }
  };

  const handleSkipSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      onComplete({ healthProfile: formData });
      navigate('/onboarding/lifestyle-factors');
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else {
      navigate('/onboarding/privacy-consent');
    }
  };

  const renderHealthSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          Have you been diagnosed with any mental health conditions?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {conditions.map((condition) => (
            <button
              key={condition}
              onClick={() => handleConditionToggle(condition)}
              className={`p-2 text-sm rounded-lg border transition-colors ${
                formData.currentConditions.includes(condition)
                  ? 'bg-[#f8a978] border-[#f8a978] text-[#5a4a42]'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {condition}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          Current medications (optional)
        </label>
        <textarea
          value={formData.medications}
          onChange={(e) => handleInputChange('medications', e.target.value)}
          placeholder="List any medications you're currently taking..."
          className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#5a4a42] focus:outline-none"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          How would you rate your current stress level?
        </label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              onClick={() => handleInputChange('stressLevel', level.toString())}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-medium transition-colors ${
                formData.stressLevel === level.toString()
                  ? 'bg-[#f8a978] border-[#f8a978] text-[#5a4a42]'
                  : 'border-gray-200 text-gray-400 hover:border-gray-300'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>
    </div>
  );

  const renderSocioeconomicSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          Employment status
        </label>
        <select
          value={formData.employmentStatus}
          onChange={(e) => handleInputChange('employmentStatus', e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#5a4a42] focus:outline-none"
        >
          <option value="">Select...</option>
          <option value="full-time">Full-time employed</option>
          <option value="part-time">Part-time employed</option>
          <option value="student">Student</option>
          <option value="unemployed">Unemployed</option>
          <option value="retired">Retired</option>
          <option value="self-employed">Self-employed</option>
          <option value="disability">Unable to work due to disability</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          Household income level
        </label>
        <select
          value={formData.incomeLevel}
          onChange={(e) => handleInputChange('incomeLevel', e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#5a4a42] focus:outline-none"
        >
          <option value="">Prefer not to say</option>
          <option value="under-25k">Under $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-75k">$50,000 - $75,000</option>
          <option value="75k-100k">$75,000 - $100,000</option>
          <option value="over-100k">Over $100,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          Housing situation
        </label>
        <select
          value={formData.housingStability}
          onChange={(e) => handleInputChange('housingStability', e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#5a4a42] focus:outline-none"
        >
          <option value="">Select...</option>
          <option value="stable-owned">Own home/stable</option>
          <option value="stable-rented">Rent/stable</option>
          <option value="temporary">Temporary housing</option>
          <option value="unstable">Housing insecurity</option>
          <option value="homeless">Currently homeless</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          Health insurance coverage
        </label>
        <select
          value={formData.healthInsurance}
          onChange={(e) => handleInputChange('healthInsurance', e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#5a4a42] focus:outline-none"
        >
          <option value="">Select...</option>
          <option value="full-coverage">Full coverage</option>
          <option value="partial-coverage">Partial coverage</option>
          <option value="emergency-only">Emergency only</option>
          <option value="no-insurance">No insurance</option>
        </select>
      </div>
    </div>
  );

  const renderLifestyleSection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          How would you describe your family/social support?
        </label>
        <div className="space-y-2">
          {[
            { value: 'strong', label: 'Strong support system' },
            { value: 'moderate', label: 'Some support available' },
            { value: 'limited', label: 'Limited support' },
            { value: 'isolated', label: 'Feel quite isolated' }
          ].map((option) => (
            <label key={option.value} className="flex items-center space-x-3">
              <input
                type="radio"
                name="familySupport"
                value={option.value}
                checked={formData.familySupport === option.value}
                onChange={(e) => handleInputChange('familySupport', e.target.value)}
                className="text-[#5a4a42] focus:ring-[#5a4a42]"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          Access to green spaces (parks, nature)
        </label>
        <div className="flex space-x-2">
          {[
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'Weekly' },
            { value: 'monthly', label: 'Monthly' },
            { value: 'rarely', label: 'Rarely' },
            { value: 'never', label: 'Never' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleInputChange('greenSpaceAccess', option.value)}
              className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                formData.greenSpaceAccess === option.value
                  ? 'bg-[#f8a978] border-[#f8a978] text-[#5a4a42]'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#5a4a42] mb-2">
          Do you feel safe in your neighborhood?
        </label>
        <div className="flex space-x-4">
          {[
            { value: 'very-safe', label: 'Very safe' },
            { value: 'mostly-safe', label: 'Mostly safe' },
            { value: 'sometimes-unsafe', label: 'Sometimes unsafe' },
            { value: 'often-unsafe', label: 'Often unsafe' }
          ].map((option) => (
            <label key={option.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="safeNeighborhood"
                value={option.value}
                checked={formData.safeNeighborhood === option.value}
                onChange={(e) => handleInputChange('safeNeighborhood', e.target.value)}
                className="text-[#5a4a42] focus:ring-[#5a4a42]"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderHealthSection();
      case 1: return renderSocioeconomicSection();
      case 2: return renderLifestyleSection();
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#f8f5f2] to-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={handleBack} className="w-10 h-10 rounded-full border-2 border-[#5a4a42] flex items-center justify-center">
          <ArrowLeftIcon size={20} className="text-[#5a4a42]" />
        </button>
        <h1 className="text-xl font-bold text-[#5a4a42]">Personal Context</h1>
        <div className="w-10 h-10 opacity-0"></div>
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center space-x-2 mb-6">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSection ? 'bg-[#5a4a42]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
            {sections[currentSection].icon}
          </div>
          <h2 className="text-2xl font-bold text-[#5a4a42] mb-2">
            {sections[currentSection].title}
          </h2>
          <p className="text-gray-600 mb-4">
            {sections[currentSection].description}
          </p>
          {sections[currentSection].optional && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
              <p className="text-sm text-blue-700">
                💡 This section is optional. Skip if you prefer not to share this information.
              </p>
            </div>
          )}
        </div>

        {/* Section Content */}
        {renderCurrentSection()}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <Button onClick={handleNext} fullWidth icon={<ArrowRightIcon size={20} />}>
          {currentSection < sections.length - 1 ? 'Continue' : 'Complete Profile'}
        </Button>
        {sections[currentSection].optional && (
          <Button onClick={handleSkipSection} variant="outline" fullWidth>
            Skip this section
          </Button>
        )}
      </div>
    </div>
  );
};

export default HealthProfile;