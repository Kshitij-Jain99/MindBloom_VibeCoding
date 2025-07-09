# Development Workflow & AI Guidance Rules
## ✅ Always Rules (Cursor / Context Critical)
- Always read `memory-bank/@architecture.md` before writing any code (includes full DB schema).
- Always read `memory-bank/@game-design-document.md` before writing any code.
- Always update `memory-bank/@architecture.md` after major features or milestone completions.

## 🧹 Code Hygiene & Structure
- Keep the codebase clean, readable, and well-organized.
- Avoid files exceeding 200–300 lines; refactor when needed.
- Use single-file scripts for small or one-off tasks.
- Avoid duplication; reuse similar logic instead of rewriting.
- Focus changes only on the relevant task or area.
- Do not modify unrelated parts of the codebase.
- Kill old testing servers/processes before starting new ones.
- Always restart the server after making changes to test properly.
- Keep diffs minimal—avoid widespread changes for small tasks.

## 🧠 Implementation & Change Scope
- Never drastically change existing patterns unless approved.
- Avoid modifying architecture or deep patterns without explicit instruction.
- Only make changes you fully understand and can explain.
- If replacing code, remove the obsolete version to prevent duplication.
- Rate-limit all API endpoints for security and performance.
- Enable CAPTCHA on all sign-up and sensitive user flows.

## 🧪 Testing & Validation
- Use mock data only in test environments, never in dev or prod.
- Test and confirm every file or feature you modify.
- Always include edge case tests, including invalid inputs or error flows.

## 📝 Documentation & Logging
- Log completed work in `progress.md` and next steps in `TODO.txt`.
- Before major changes, draft an implementation plan in `plan.md` and await approval.
- Maintain a central `rules.md` file in the codebase for continuous reference.


# Coding Preferences Rules
## General Principles
- **Simplicity:** Prefer the simplest working solution over clever abstractions.
- **DRY:** Eliminate duplication by reusing code through functions or modules.
- **KISS:** Avoid overengineering; keep code short and simple.
- **YAGNI:** Don’t implement features until they’re actually needed.

## Architecture & Organization
- **SOLID:** Follow SOLID principles to guide modular, maintainable design.
- **File Size:** Keep source files under 300 lines; refactor when larger.
- **Separation of Concerns:** Ensure each file or component has a single, clear responsibility.

## Documentation & Communication
- **Self-Documenting Code:** Use clear naming to reduce the need for comments.
- **Component Docs:** Document major components in `/docs/[component].md`.
- **Architecture Doc:** Maintain a high-level overview in `/docs/architecture.md`.

## Environment & Testing
- **Mocking Rule:** Use mock data only in tests, never in dev or prod.
- **Error Handling:** Add fallback logic or error boundaries to all critical operations.
- **Test Strategy:** Write tests for core paths; prefer integration tests over mocks.

## Tooling & Stack
- **Stack Control:** Do not add or change stack components without explicit approval.
- **Dependency Hygiene:** Keep dependencies lean, current, and necessary.

## Behavioral Safeguards
- **Context Check:** Begin each response with a random emoji to confirm context retention.
- **Token Efficiency:** Write concise outputs without losing clarity or depth.
- **Guardrails:** Never alter stack/tools/config without user’s explicit go-ahead.


# Communication Preferences Rules

- **Summaries:** After completing a component, provide a brief summary of what was done.
- **Change Scale:** Classify every change as Small, Medium, or Large to set context.
- **Clarification:** Ask before proceeding if any part of the request is unclear or underspecified.
- **Planning:** For Large changes, present a step-by-step plan and wait for approval.
- **Tracking:** Always state what’s completed, what’s in progress, and what’s pending.
- **Emotional Cues:** When urgency or emphasis is expressed, increase precision and double-check critical paths.
- **Context Anchoring:** Reiterate your understanding of the request before acting on complex tasks.
- **Checkpointing:** For multi-step changes, confirm direction after each major step.
- **Assumption Logging:** Explicitly state any assumptions made before or during implementation.
- **Tone Matching:** Match the tone—concise, detailed, relaxed, or formal—to the style of the user request.
- **Response Formatting:** Use clear, readable formatting (e.g., bullets, headings, code blocks) for all responses.
- **Boundaries Respect:** Do not continue work or introduce changes beyond what’s explicitly requested or confirmed.

# Workflow Preferences Rules

- **Scoped Changes:** Modify only the code or areas I explicitly specify; leave all else untouched.
- **Staged Execution:** Break large tasks into stages or milestones and pause after each for approval.
- **Pre-Change Planning:** Before major changes, draft a `plan.md` and wait for confirmation before executing.
- **Progress Logging:** Record completed work in `progress.md` and upcoming steps in `TODO.txt`.
- **Testing Standards:** Include complete test coverage for major features and propose edge case tests (e.g., invalid input, null values).
- **Context Management:** If context exceeds 100k tokens, summarize into `context-summary.md` and restart the session with the summary.
- **Feedback-Driven Checkpoints:** Adjust checkpoint frequency based on my preference for granularity.
- **Minimal Diff Principle:** Make the smallest diff possible to fulfill the task, minimizing unrelated changes.
- **Reversion Safety:** Ensure all major changes can be easily reverted or rolled back.
- **Dependency Awareness:** Flag external dependency changes (e.g., APIs, libraries) before applying them.
- **Commit Hygiene:** Write meaningful commit messages summarizing intent, scope, and scale of the change.
- **Manual Review Flagging:** Flag complex areas of the code that may need my manual review before continuing.


