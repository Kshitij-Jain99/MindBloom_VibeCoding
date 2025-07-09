import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Onboarding from './screens/Onboarding';
import MoodAssessment from './screens/Assessment/MoodAssessment';
import SleepAssessment from './screens/Assessment/SleepAssessment';
import ExpressionAnalysis from './screens/Assessment/ExpressionAnalysis';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Layout from './components/Layout';
export function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [hasCompletedAssessment, setHasCompletedAssessment] = useState(false);
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/onboarding" element={<Onboarding onComplete={() => setHasCompletedOnboarding(true)} />} />
          <Route path="/assessment/mood" element={hasCompletedOnboarding ? <MoodAssessment /> : <Navigate to="/onboarding" />} />
          <Route path="/assessment/sleep" element={hasCompletedOnboarding ? <SleepAssessment /> : <Navigate to="/onboarding" />} />
          <Route path="/assessment/expression" element={hasCompletedOnboarding ? <ExpressionAnalysis onComplete={() => setHasCompletedAssessment(true)} /> : <Navigate to="/onboarding" />} />
          <Route path="/dashboard" element={hasCompletedAssessment ? <Dashboard /> : <Navigate to="/assessment/mood" />} />
          <Route path="/profile" element={hasCompletedAssessment ? <Profile /> : <Navigate to="/assessment/mood" />} />
        </Routes>
      </Layout>
    </Router>;
}