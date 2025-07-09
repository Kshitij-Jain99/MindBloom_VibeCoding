import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { SunIcon } from 'lucide-react';
const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return <div className="flex flex-col items-center justify-between h-full p-8 bg-gradient-to-b from-[#f8f5f2] to-white">
      <div className="w-full flex justify-center mt-12">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-[#f8a978] flex items-center justify-center">
            <SunIcon size={64} className="text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-[#a3c9a8] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold text-[#5a4a42] mb-4">MindBloom</h1>
        <p className="text-xl text-[#5a4a42] opacity-80">
          Your personalized journey to mental wellness and self-discovery
        </p>
      </div>
      <div className="w-full space-y-4 mb-8">
        <Button onClick={() => navigate('/onboarding')} fullWidth>
          Get Started
        </Button>
        <Button onClick={() => {}} variant="outline" fullWidth>
          I Already Have an Account
        </Button>
      </div>
    </div>;
};
export default Welcome;