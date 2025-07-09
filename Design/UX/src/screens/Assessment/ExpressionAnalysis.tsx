import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { ArrowLeftIcon, ArrowRightIcon, MicIcon, AlertTriangleIcon } from 'lucide-react';
interface ExpressionAnalysisProps {
  onComplete: () => void;
}
const ExpressionAnalysis: React.FC<ExpressionAnalysisProps> = ({
  onComplete
}) => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const maxLength = 250;
  const handleContinue = () => {
    onComplete();
    navigate('/dashboard');
  };
  // This function simulates checking for concerning content
  const checkForConcerningContent = (text: string): boolean => {
    const concerningPhrases = ['kill me', 'suicide', 'die', 'end my life', "don't want to be alive"];
    return concerningPhrases.some(phrase => text.toLowerCase().includes(phrase));
  };
  const hasConcerningContent = checkForConcerningContent(text);
  return <div className="flex flex-col h-full bg-white">
      <div className="p-6">
        <div className="flex items-center">
          <button onClick={() => navigate('/assessment/sleep')} className="w-10 h-10 rounded-full border-2 border-[#5a4a42] flex items-center justify-center">
            <ArrowLeftIcon size={20} className="text-[#5a4a42]" />
          </button>
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold text-[#5a4a42]">Assessment</h2>
          </div>
          <div className="bg-[#f8f5f2] px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-[#5a4a42]">7 OF 7</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-8">
        <h1 className="text-2xl font-bold text-[#5a4a42] mb-4 text-center">
          Expression Analysis
        </h1>
        <p className="text-center text-[#5a4a42] opacity-80 mb-8">
          Freely write down anything that's on your mind. Dr Freud.ai is here to
          listen...
        </p>
        <div className="relative flex-1 mb-8">
          <textarea value={text} onChange={e => setText(e.target.value)} className="w-full h-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#5a4a42] focus:ring-1 focus:ring-[#5a4a42] resize-none" placeholder="Start typing your thoughts here..." maxLength={maxLength}></textarea>
          {hasConcerningContent && <div className="absolute top-2 right-2 left-2 bg-red-100 text-red-800 p-3 rounded-lg flex items-center">
              <AlertTriangleIcon size={20} className="mr-2 flex-shrink-0" />
              <span className="text-sm">
                We've detected concerning content. Would you like to talk to a
                mental health professional?
              </span>
            </div>}
          <div className="absolute bottom-2 right-2 text-sm text-gray-500">
            {text.length}/{maxLength}
          </div>
        </div>
        <Button onClick={() => {}} variant="outline" fullWidth icon={<MicIcon size={20} />} className="mb-4">
          Use voice instead
        </Button>
      </div>
      <div className="p-8">
        <Button onClick={handleContinue} fullWidth icon={<ArrowRightIcon size={20} />}>
          Continue
        </Button>
      </div>
    </div>;
};
export default ExpressionAnalysis;