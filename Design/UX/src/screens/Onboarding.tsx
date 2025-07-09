import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
interface OnboardingProps {
  onComplete: () => void;
}
const Onboarding: React.FC<OnboardingProps> = ({
  onComplete
}) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const steps = [{
    title: 'Personalized Wellness',
    description: 'MindBloom creates a unique mental wellness plan tailored to your specific needs and goals.',
    image: "/image.png"
  }, {
    title: 'Track Your Progress',
    description: 'Monitor your mental wellness journey with intuitive tools and visualizations.',
    image: "/image.png"
  }, {
    title: 'Expert Guidance',
    description: 'Access evidence-based techniques and exercises developed by mental health professionals.',
    image: "/image.png"
  }];
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
      navigate('/assessment/mood');
    }
  };
  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };
  return <div className="flex flex-col h-full bg-white">
      <div className="flex-1 flex flex-col p-8">
        <div className="flex justify-between items-center mb-8">
          <button onClick={handlePrevious} className="w-10 h-10 rounded-full border-2 border-[#5a4a42] flex items-center justify-center">
            <ArrowLeftIcon size={20} className="text-[#5a4a42]" />
          </button>
          <div className="flex space-x-2">
            {steps.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full ${index === step ? 'bg-[#5a4a42]' : 'bg-gray-300'}`} />)}
          </div>
          <div className="w-10 h-10 opacity-0">
            {/* Placeholder for alignment */}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-[#f8f5f2] mb-8 flex items-center justify-center overflow-hidden">
            <img src={steps[step].image} alt={steps[step].title} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-[#5a4a42] mb-4 text-center">
            {steps[step].title}
          </h2>
          <p className="text-center text-[#5a4a42] opacity-80">
            {steps[step].description}
          </p>
        </div>
      </div>
      <div className="p-8">
        <Button onClick={handleNext} fullWidth icon={<ArrowRightIcon size={20} />}>
          {step < steps.length - 1 ? 'Continue' : 'Start Assessment'}
        </Button>
      </div>
    </div>;
};
export default Onboarding;