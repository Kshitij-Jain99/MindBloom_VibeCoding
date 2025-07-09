import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Onboarding from './screens/Onboarding';
import PersonaSelection from './screens/PersonaSelection';
import PrivacyConsent from './screens/PrivacyConsent';
import HealthProfile from './screens/HealthProfile';
import LifestyleFactors from './screens/LifestyleFactors';
import MoodAssessment from './screens/Assessment/MoodAssessment';
import SleepAssessment from './screens/Assessment/SleepAssessment';
import ExpressionAnalysis from './screens/Assessment/ExpressionAnalysis';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Layout from './components/Layout';

export function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [hasCompletedPhase1, setHasCompletedPhase1] = useState(false);
  const [hasCompletedAssessment, setHasCompletedAssessment] = useState(false);
  const [userProfile, setUserProfile] = useState({
    persona: null,
    pet: null,
    privacyConsents: null,
    healthProfile: null,
    lifestyleFactors: null
  });

  const handleOnboardingComplete = () => {
    setHasCompletedOnboarding(true);
  };

  const handlePhase1DataUpdate = (data: any) => {
    setUserProfile(prev => ({ ...prev, ...data }));
  };

  const handlePhase1Complete = (data: any) => {
    setUserProfile(prev => ({ ...prev, ...data }));
    setHasCompletedPhase1(true);
  };

  const handleAssessmentComplete = () => {
    setHasCompletedAssessment(true);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Welcome Screen */}
          <Route path="/" element={<Welcome />} />
          
          {/* Initial Onboarding */}
          <Route 
            path="/onboarding" 
            element={<Onboarding onComplete={handleOnboardingComplete} />} 
          />
          
          {/* Phase 1: Detailed Onboarding */}
          <Route 
            path="/onboarding/persona-selection" 
            element={
              hasCompletedOnboarding ? 
                <PersonaSelection onComplete={handlePhase1DataUpdate} /> : 
                <Navigate to="/onboarding" />
            } 
          />
          <Route 
            path="/onboarding/privacy-consent" 
            element={
              hasCompletedOnboarding ? 
                <PrivacyConsent onComplete={handlePhase1DataUpdate} /> : 
                <Navigate to="/onboarding" />
            } 
          />
          <Route 
            path="/onboarding/health-profile" 
            element={
              hasCompletedOnboarding ? 
                <HealthProfile onComplete={handlePhase1DataUpdate} /> : 
                <Navigate to="/onboarding" />
            } 
          />
          <Route 
            path="/onboarding/lifestyle-factors" 
            element={
              hasCompletedOnboarding ? 
                <LifestyleFactors onComplete={handlePhase1Complete} /> : 
                <Navigate to="/onboarding" />
            } 
          />
          
          {/* Phase 2: Assessment */}
          <Route 
            path="/assessment/mood" 
            element={
              hasCompletedPhase1 ? 
                <MoodAssessment /> : 
                <Navigate to="/onboarding/persona-selection" />
            } 
          />
          <Route 
            path="/assessment/sleep" 
            element={
              hasCompletedPhase1 ? 
                <SleepAssessment /> : 
                <Navigate to="/onboarding/persona-selection" />
            } 
          />
          <Route 
            path="/assessment/expression" 
            element={
              hasCompletedPhase1 ? 
                <ExpressionAnalysis onComplete={handleAssessmentComplete} /> : 
                <Navigate to="/onboarding/persona-selection" />
            } 
          />
          
          {/* Main App Screens */}
          <Route 
            path="/dashboard" 
            element={
              hasCompletedAssessment ? 
                <Dashboard /> : 
                <Navigate to="/assessment/mood" />
            } 
          />
          <Route 
            path="/profile" 
            element={
              hasCompletedAssessment ? 
                <Profile /> : 
                <Navigate to="/assessment/mood" />
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}