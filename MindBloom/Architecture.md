# 🏗️ MindBloom Architecture Overview

## 📅 Last Updated
**Date**: December 2024  
**Milestone**: Phase 1 Implementation Complete  
**Status**: ✅ Production Ready

## 🎯 Phase 1 Architecture Implementation

### Frontend Structure
```
Design/UX/src/
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Layout.tsx           # Main app layout wrapper
│   └── Navbar.tsx           # Navigation component
├── screens/
│   ├── Welcome.tsx          # Landing screen
│   ├── Onboarding.tsx       # Initial 3-step intro
│   ├── PersonaSelection.tsx # NEW: Personality & pet selection
│   ├── PrivacyConsent.tsx   # NEW: Privacy-first consent flow
│   ├── HealthProfile.tsx    # NEW: Health/socioeconomic profiling
│   ├── LifestyleFactors.tsx # NEW: Lifestyle assessment & completion
│   ├── Profile.tsx          # User profile management
│   ├── Dashboard.tsx        # Main app dashboard
│   └── Assessment/
│       ├── MoodAssessment.tsx
│       ├── SleepAssessment.tsx
│       └── ExpressionAnalysis.tsx
└── App.tsx                  # UPDATED: Enhanced routing & state management
```

### Data Flow Architecture
```
User Journey:
Welcome → Onboarding → PersonaSelection → PrivacyConsent → HealthProfile → LifestyleFactors → Assessment → Dashboard

State Management:
- hasCompletedOnboarding: Boolean
- hasCompletedPhase1: Boolean  
- hasCompletedAssessment: Boolean
- userProfile: Object {
    persona: PersonaData,
    pet: PetData,
    privacyConsents: ConsentData,
    healthProfile: HealthData,
    lifestyleFactors: LifestyleData
  }
```

### Privacy-First Design
- **Local Storage Priority**: Sensitive data kept on device
- **Granular Consent**: 5 distinct permission categories
- **Optional Data Collection**: All personal info can be skipped
- **Transparent Usage**: Clear explanations of data handling
- **User Control**: Settings changeable at any time

### Tech Stack (Implemented)
- **Frontend**: React 18.3.1 + TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 6.26.2
- **Icons**: Lucide React 0.441.0
- **Build Tool**: Vite 5.2.0
- **Development**: ESLint + TypeScript strict mode

### Component Design System
- **Color Palette**: 
  - Primary: #5a4a42 (warm brown)
  - Secondary: #f8a978 (soft orange)
  - Background: #f8f5f2 (warm beige)
  - Accent: Various semantic colors for status
- **Typography**: Hierarchical heading system
- **Spacing**: Consistent padding/margin scale
- **Interactive Elements**: Rounded corners, smooth transitions
- **Mobile-First**: Responsive design principles

## 🔄 Routing Architecture

### Route Protection Strategy
```
/ (Welcome) → Open to all
/onboarding → Open to all
/onboarding/* → Requires: hasCompletedOnboarding
/assessment/* → Requires: hasCompletedPhase1
/dashboard → Requires: hasCompletedAssessment
/profile → Requires: hasCompletedAssessment
```

### Navigation Guards
- Conditional redirects based on completion status
- Progressive unlock of features
- Fallback to appropriate incomplete step

## 📊 Data Architecture

### Profile Data Structure
```typescript
interface UserProfile {
  persona: {
    type: 'explorer' | 'guardian' | 'analyzer' | 'creator';
    traits: string[];
  };
  pet: {
    type: string;
    name: string;
    emoji: string;
  };
  privacyConsents: {
    essential: true;
    analytics: boolean;
    personalization: boolean;
    healthData: boolean;
    communication: boolean;
  };
  healthProfile: {
    mentalHealthHistory: string;
    currentConditions: string[];
    medications: string;
    stressLevel: string;
    employmentStatus: string;
    incomeLevel: string;
    housingStability: string;
    // ... additional health/socioeconomic fields
  };
  lifestyleFactors: {
    relaxationMethods: string[];
    goals: string[];
    dailyRoutine: string;
    motivations: string;
    completedAt: string;
    phase1Completed: boolean;
  };
}
```

## 🛡️ Security & Privacy Implementation

### Privacy Compliance
- GDPR-style granular consent
- Data minimization principles
- Clear retention policies
- User deletion rights
- Transparent data usage

### Security Measures
- Client-side validation
- Secure state management
- No sensitive data in URLs
- Form input sanitization
- Protected route enforcement

## 📱 Responsive Design Strategy

### Breakpoint Strategy
- Mobile-first development
- Touch-optimized interactions
- Flexible layouts
- Scalable typography
- Adaptive spacing

### Accessibility Features
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 🔄 State Management

### Current Implementation
- React useState for local state
- Props drilling for data flow
- Route-based persistence
- Conditional rendering based on completion status

### Future Considerations (Phase 2+)
- Context API for global state
- Local storage persistence
- Backend synchronization
- Offline capability

---

## 📈 Phase 1 Completion Summary

✅ **Completed Features:**
- Persona selection with 4 archetypes
- Pet customization with 6 options
- Privacy-first consent management
- Health & socioeconomic profiling
- Lifestyle factors assessment
- Progressive user flow
- Mobile-responsive design
- Accessibility compliance

🎯 **Ready for Phase 2:**
- Core daily interactions
- Mood logging with context
- Journaling capabilities
- Device health integration

📊 **Metrics Ready:**
- User completion tracking
- Drop-off point analysis
- Data quality assessment
- Performance monitoring

---

*Architecture document updated for Phase 1 completion - December 2024*
