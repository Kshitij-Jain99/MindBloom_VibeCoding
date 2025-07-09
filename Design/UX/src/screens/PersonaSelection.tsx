import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRightIcon, ArrowLeftIcon, Heart, Brain, Zap, Shield, Star } from 'lucide-react';

interface PersonaSelectionProps {
  onComplete: (data: any) => void;
}

const PersonaSelection: React.FC<PersonaSelectionProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [selectedPersona, setSelectedPersona] = useState('');
  const [selectedPet, setSelectedPet] = useState('');
  const [petName, setPetName] = useState('');

  const personas = [
    {
      id: 'explorer',
      name: 'Explorer',
      description: 'Curious and open to new experiences',
      icon: '🗺️',
      color: 'bg-blue-100 border-blue-300',
      traits: ['Adventurous', 'Open-minded', 'Creative']
    },
    {
      id: 'guardian',
      name: 'Guardian',
      description: 'Caring and protective of others',
      icon: '🛡️',
      color: 'bg-green-100 border-green-300',
      traits: ['Empathetic', 'Loyal', 'Responsible']
    },
    {
      id: 'analyzer',
      name: 'Analyzer',
      description: 'Thoughtful and detail-oriented',
      icon: '🔍',
      color: 'bg-purple-100 border-purple-300',
      traits: ['Logical', 'Observant', 'Systematic']
    },
    {
      id: 'creator',
      name: 'Creator',
      description: 'Innovative and expressive',
      icon: '🎨',
      color: 'bg-orange-100 border-orange-300',
      traits: ['Artistic', 'Imaginative', 'Original']
    }
  ];

  const pets = [
    { id: 'phoenix', name: 'Phoenix', emoji: '🔥', description: 'Resilient and transformative' },
    { id: 'owl', name: 'Wise Owl', emoji: '🦉', description: 'Thoughtful and observant' },
    { id: 'butterfly', name: 'Butterfly', emoji: '🦋', description: 'Gentle and evolving' },
    { id: 'lion', name: 'Lion', emoji: '🦁', description: 'Courageous and strong' },
    { id: 'turtle', name: 'Turtle', emoji: '🐢', description: 'Patient and steady' },
    { id: 'dolphin', name: 'Dolphin', emoji: '🐬', description: 'Playful and intelligent' }
  ];

  const handleNext = () => {
    if (selectedPersona && selectedPet && petName.trim()) {
      onComplete({
        persona: selectedPersona,
        pet: selectedPet,
        petName: petName.trim()
      });
      navigate('/onboarding/privacy-consent');
    }
  };

  const handleBack = () => {
    navigate('/onboarding');
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#f8f5f2] to-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={handleBack} className="w-10 h-10 rounded-full border-2 border-[#5a4a42] flex items-center justify-center">
          <ArrowLeftIcon size={20} className="text-[#5a4a42]" />
        </button>
        <h1 className="text-xl font-bold text-[#5a4a42]">Choose Your Path</h1>
        <div className="w-10 h-10 opacity-0"></div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-8">
        {/* Persona Selection */}
        <div>
          <h2 className="text-2xl font-bold text-[#5a4a42] mb-4 text-center">What describes you best?</h2>
          <div className="grid grid-cols-2 gap-4">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setSelectedPersona(persona.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedPersona === persona.id 
                    ? 'border-[#5a4a42] bg-[#f8f5f2] shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-3xl mb-2">{persona.icon}</div>
                <h3 className="font-bold text-[#5a4a42] mb-1">{persona.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{persona.description}</p>
                <div className="flex flex-wrap gap-1">
                  {persona.traits.map((trait, idx) => (
                    <span key={idx} className="text-xs bg-[#f8a978] text-[#5a4a42] px-2 py-1 rounded-full">
                      {trait}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pet Selection */}
        {selectedPersona && (
          <div>
            <h2 className="text-2xl font-bold text-[#5a4a42] mb-4 text-center">Choose Your Companion</h2>
            <p className="text-center text-gray-600 mb-4">Your companion will grow and evolve with you on your wellness journey</p>
            <div className="grid grid-cols-3 gap-3">
              {pets.map((pet) => (
                <button
                  key={pet.id}
                  onClick={() => setSelectedPet(pet.id)}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedPet === pet.id 
                      ? 'border-[#5a4a42] bg-[#f8f5f2] shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{pet.emoji}</div>
                  <h4 className="font-medium text-[#5a4a42] text-sm mb-1">{pet.name}</h4>
                  <p className="text-xs text-gray-600">{pet.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pet Naming */}
        {selectedPet && (
          <div>
            <h2 className="text-2xl font-bold text-[#5a4a42] mb-4 text-center">Name Your Companion</h2>
            <div className="max-w-sm mx-auto">
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Enter a name..."
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#5a4a42] focus:outline-none text-center text-lg"
                maxLength={20}
              />
              {petName && (
                <div className="mt-4 p-4 bg-[#f8f5f2] rounded-xl text-center">
                  <div className="text-3xl mb-2">{pets.find(p => p.id === selectedPet)?.emoji}</div>
                  <p className="text-[#5a4a42] font-medium">Meet {petName}!</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Next Button */}
      <div className="mt-6">
        <Button 
          onClick={handleNext} 
          fullWidth 
          icon={<ArrowRightIcon size={20} />}
          className={`${(!selectedPersona || !selectedPet || !petName.trim()) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PersonaSelection;