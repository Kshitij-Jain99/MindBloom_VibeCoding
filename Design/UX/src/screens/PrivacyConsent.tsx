import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRightIcon, ArrowLeftIcon, Shield, Eye, Lock, Database, Heart } from 'lucide-react';

interface PrivacyConsentProps {
  onComplete: (data: any) => void;
}

const PrivacyConsent: React.FC<PrivacyConsentProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [consents, setConsents] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    personalization: false,
    healthData: false,
    communication: false
  });

  const consentItems = [
    {
      id: 'essential',
      title: 'Essential Functionality',
      description: 'Required for the app to work properly. Includes your account data and basic preferences.',
      icon: <Shield className="text-green-600" size={24} />,
      required: true,
      detail: 'This includes your login credentials, basic profile information, and app settings necessary for functionality.'
    },
    {
      id: 'analytics',
      title: 'Usage Analytics',
      description: 'Help us improve the app by sharing anonymous usage data.',
      icon: <Eye className="text-blue-600" size={24} />,
      required: false,
      detail: 'Anonymous data about how you use features, time spent in app, and crash reports. No personal identification.'
    },
    {
      id: 'personalization',
      title: 'Personalized Experience',
      description: 'Allow us to customize your experience based on your preferences and behavior.',
      icon: <Heart className="text-pink-600" size={24} />,
      required: false,
      detail: 'Enables AI-powered recommendations, customized content, and adaptive interface based on your usage patterns.'
    },
    {
      id: 'healthData',
      title: 'Health Data Processing',
      description: 'Process your mood, sleep, and wellness data to provide insights and recommendations.',
      icon: <Database className="text-purple-600" size={24} />,
      required: false,
      detail: 'Your mood logs, wellness assessments, and journal entries to provide personalized mental health insights.'
    },
    {
      id: 'communication',
      title: 'Wellness Communications',
      description: 'Receive helpful tips, reminders, and wellness content via notifications.',
      icon: <Lock className="text-orange-600" size={24} />,
      required: false,
      detail: 'Push notifications, email updates about your progress, and relevant mental wellness tips and resources.'
    }
  ];

  const handleConsentChange = (id: string, value: boolean) => {
    if (id === 'essential') return; // Cannot change essential
    setConsents(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    onComplete({ privacyConsents: consents });
    navigate('/onboarding/health-profile');
  };

  const handleBack = () => {
    navigate('/onboarding/persona-selection');
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#f8f5f2] to-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={handleBack} className="w-10 h-10 rounded-full border-2 border-[#5a4a42] flex items-center justify-center">
          <ArrowLeftIcon size={20} className="text-[#5a4a42]" />
        </button>
        <h1 className="text-xl font-bold text-[#5a4a42]">Privacy Settings</h1>
        <div className="w-10 h-10 opacity-0"></div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Privacy Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#f8a978] rounded-full flex items-center justify-center">
            <Shield size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#5a4a42] mb-2">Your Privacy Matters</h2>
          <p className="text-gray-600">
            Choose what data you're comfortable sharing. You can change these settings anytime.
          </p>
        </div>

        {/* Privacy Principles */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h3 className="font-bold text-blue-800 mb-2">Our Privacy Promise</h3>
          <ul className="space-y-1 text-sm text-blue-700">
            <li>• Your data is encrypted and secure</li>
            <li>• We never sell your personal information</li>
            <li>• You can delete your data at any time</li>
            <li>• Local storage keeps sensitive data on your device</li>
          </ul>
        </div>

        {/* Consent Items */}
        <div className="space-y-4">
          {consentItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-[#5a4a42]">{item.title}</h4>
                      {item.required && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Required</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-500">{item.detail}</p>
                  </div>
                </div>
                <div className="ml-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consents[item.id as keyof typeof consents]}
                      onChange={(e) => handleConsentChange(item.id, e.target.checked)}
                      disabled={item.required}
                      className="sr-only peer"
                    />
                    <div className={`relative w-11 h-6 rounded-full transition-colors ${
                      item.required ? 'bg-green-400' : 'bg-gray-200 peer-checked:bg-[#5a4a42]'
                    } peer-disabled:opacity-50`}>
                      <div className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform ${
                        consents[item.id as keyof typeof consents] ? 'translate-x-5' : ''
                      }`}></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Storage Info */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <h4 className="font-medium text-[#5a4a42] mb-2">Data Storage</h4>
          <p className="text-sm text-gray-600">
            Your most sensitive data (like journal entries) stays on your device. 
            Only anonymized insights are processed on our servers to provide recommendations.
          </p>
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-6">
        <Button onClick={handleNext} fullWidth icon={<ArrowRightIcon size={20} />}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PrivacyConsent;