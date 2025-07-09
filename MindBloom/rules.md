
# 🚀 MindBloom Development Rules

> **Version**: 1.1  
> **Last Updated**: July 2025  
> **Purpose**: Unified coding, architecture, workflow, and deployment standards for the MindBloom project.

---

## 📘 Architecture & Design First

- **Always read before coding**:
  - `memory-bank/@architecture.md`
  - `memory-bank/@game-design-document.md`
- **Document-Driven Development**: No implementation without corresponding architecture.
- **Update & commit** architecture docs with every major feature or milestone.
- **Validate designs** for scalability, maintainability, and compatibility with current architecture.
- **Discuss breaking changes** with the team before implementation.

---

## 🧱 Code Quality & Structure

### 🔑 Core Principles
- **Simplicity First**: Prioritize clarity over cleverness.
- **Single Responsibility**: Each function/component should serve one purpose.
- **DRY**: Avoid duplicating logic—reuse helpers and components.
- **Strict Type Safety**: TypeScript in strict mode, no `any`.
- **Minimal Scope of Change**: Modify only what’s necessary; no side edits.

### 🧼 Clean Code Standards
- **Variable Names**: Descriptive, intention-revealing.
- **Function Size**: Max 50 lines.
- **File Size Limits**:
  - Components: <200 lines
  - Services: <300 lines
  - Utils: <150 lines
- **Nesting Depth**: Max 3 levels.
- **Commenting**: Avoid unless explaining business-critical logic.

### 🚫 Forbidden Practices
- No `console.log` in production (use logger).
- No hardcoded values—use config/constants.
- No TODOs without linked GitHub issues.
- No commented-out code in commits.

---

## 📦 Project Structure

```
/src
  /components     # UI components
  /services       # Business logic, API calls
  /utils          # Helper functions
  /hooks          # Custom hooks
  /store          # State management
  /types          # Interfaces/types
  /constants      # App constants
  /config         # Environment/config setup
  /assets         # Static assets
/tests
  /unit
  /integration
  /e2e
/docs             # Project documentation
```

### 📁 Naming Conventions
| Type        | Convention          | Example               |
|-------------|---------------------|------------------------|
| Component   | PascalCase          | `UserProfile.tsx`     |
| Service     | camelCase           | `userService.ts`      |
| Utils       | camelCase           | `dateUtils.ts`        |
| Constants   | SCREAMING_SNAKE_CASE| `API_ENDPOINTS.ts`    |
| Types       | PascalCase + Suffix| `UserTypes.ts`        |

---

## 🧪 Testing Standards

### 🧪 Coverage & Strategy
- **Minimum Coverage**: 80% overall, 90% for critical paths.
- **Write Tests First** (TDD where practical).
- **Types**:
  - Unit: Services, logic
  - Integration: APIs
  - E2E: Critical flows
  - Performance: Data-heavy ops

### ✅ Test Cases
- Happy path
- Edge cases
- Error handling
- Load/performance

---

## 📄 Documentation Standards

### 📚 Requirements
- **Architecture & System Design**
- **Component Usage** (Props, Examples, Screenshots)
- **API Docs** (OpenAPI/Swagger)
- **Deployment Guides**  
- **Changelogs** for user-facing or breaking changes

### 📂 Structure
```
/docs
  /api
  /components
  /architecture
  /deployment
  /examples
```

---

## 🔐 Security & Data Integrity

### 🛡️ Secure Development
- Use **bcrypt (12+ rounds)** for passwords
- Use **JWT** with proper expiration & refresh
- Use **rate limiting + CAPTCHA** on public auth endpoints
- Validate and sanitize all input
- Prevent **SQLi, XSS, CSRF**
- Never commit secrets—use `.env`

### 📦 Data Handling
- Schema changes must go through `/migrations` with:
  - Comments
  - Backups
  - Sample data testing
- Index performance-critical fields
- Enforce constraints both in code and DB

---

## ⚙️ Workflow & Git Practices

### 🧰 Development Flow
1. Read architecture docs
2. Create GitHub issue
3. Use feature branch from `develop`
4. Code, test, document
5. Submit PR with clear title & description
6. Get 2 reviews before merge

### 🔀 Git Rules
- **Conventional commits**: `feat:`, `fix:`, `chore:`, etc.
- **Atomic commits**: One concern per commit
- **Squash on merge**, then **delete branch**
- **No re-orgs/renames** without team approval

---

## 💬 Communication & Review

- **Daily standups**: Share blockers and progress
- **PR Reviews**:
  - Timely (within 24 hrs)
  - Constructive & respectful
  - Ask questions if unclear
- **Major architecture decisions**: Must be documented
- **Notify team** on breaking changes

---

## 🛠️ Technical Stack & Tooling

### 🧱 Approved Stack
| Area       | Tools                                   |
|------------|------------------------------------------|
| Frontend   | React 18+, TypeScript, Tailwind CSS      |
| Backend    | Node.js, Express, PostgreSQL             |
| Testing    | Jest, Playwright, React Testing Library  |
| Tooling    | ESLint, Prettier, Husky, GitHub Actions  |

### 🧰 Environment Setup
- Use VSCode with shared config/extensions
- Pre-commit: Lint + test via Husky
- Lock dependencies and use lockfiles
- Match local and production environments

---

## ⚡ Performance & Optimization

### 🎯 Targets
- **Page Load**: <3s (3G)
- **FCP**: <1.5s
- **TTI**: <4s
- **API Response**: <200ms @95%

### ⚙️ Tactics
- Code splitting by route
- WebP/AVIF for images
- Optimize bundle sizes
- Cache aggressively
- Profile before optimizing

---

## 🚀 Deployment & Monitoring

### 🌐 Environments
- `dev`: Local
- `staging`: Production-like
- `prod`: Live with monitoring

### 📦 Deployment Checklist
- All tests pass
- Security scan complete
- Performance tests run
- Rollback strategy in place

### 📊 Monitoring
- Health checks for all services
- Error + performance logging
- Tracing for distributed flows
- User analytics

---

## 📈 Continuous Improvement

- **Monthly**: Review these rules
- **Quarterly**: Security & performance audits
- **Annually**: Stack evaluation
- **Tech Talks**: Share best practices regularly

---

## ✅ Pre-Commit Developer Checklist

Before you push:
- [ ] Read related architecture/docs
- [ ] Modify only what’s necessary
- [ ] Write/update tests
- [ ] Follow existing patterns
- [ ] Consider security/performance
- [ ] Update docs if needed
- [ ] Test locally with real data
- [ ] Write a clear, conventional commit
- [ ] Submit for review

---

**These rules are evolving—contribute through discussion and updates when needed. Clarity, security, and teamwork come first.**  
*Last updated: July 2025*
