# 🚀 MindBloom Development Guidelines

> **Context-Critical Rules for Consistent, High-Quality Development**

## 📘 Architecture & Design First

### Core Principles
- **Always read `memory-bank/@architecture.md`** before writing any code
- **Always read `memory-bank/@game-design-document.md`** before any implementation
- **Document-Driven Development**: If architecture docs don't exist, create them first
- **Update documentation** when major features are added or milestones completed
- **Commit architectural changes** immediately after updates

### Design Validation
- Validate design decisions against existing architecture before implementation
- Discuss breaking changes with the team before proceeding
- Consider scalability and maintainability in every design choice

## 🗃️ Schema & Data Awareness

### Database Management
- **Include full database schema** in your context when writing code
- **Validate all DB changes** with migration scripts in `/migrations`
- **Test migrations** on sample data before production
- **Document schema changes** in migration comments
- **Backup strategy**: Ensure rollback plans for all schema modifications

### Data Integrity
- Always validate data constraints at both application and database levels
- Use appropriate indexing for performance-critical queries
- Follow naming conventions for tables, columns, and constraints

## 🛑 Precision & Minimal Changes

### Edit Philosophy
- **Only modify what's required** to complete the task—no cascade changes unless explicitly requested
- **Always ask before** renaming shared variables, moving files, or reorganizing folder structure
- **One concern per commit**: Keep changes focused and atomic
- **Preserve existing patterns** unless improvement is explicitly part of the task

### Impact Assessment
- Consider downstream effects of any change
- Test affected functionality after modifications
- Document breaking changes clearly

## 🧪 Quality & Testing

### Code Quality Standards
- **Write tests first** for new functionality (TDD approach)
- **Maintain test coverage** above 80% for critical paths
- **Run full test suite** before committing changes
- **Code reviews required** for all changes to main/production branches

### Testing Strategy
- Unit tests for business logic
- Integration tests for API endpoints
- End-to-end tests for critical user journeys
- Performance tests for data-heavy operations

## 📚 Documentation & Communication

### Code Documentation
- **Self-documenting code**: Use clear, descriptive variable and function names
- **Comment complex logic** and business rules
- **API documentation**: Keep OpenAPI/Swagger specs updated
- **README files**: Maintain clear setup and usage instructions

### Change Communication
- **Descriptive commit messages** following conventional commits format
- **PR descriptions** should explain the "why" not just the "what"
- **Update changelogs** for user-facing changes
- **Notify team** of breaking changes or significant architectural shifts

## 🔄 Git & Version Control

### Branch Strategy
- **Feature branches** for all new development
- **Descriptive branch names**: `feature/user-authentication`, `fix/memory-leak-in-parser`
- **Squash commits** when merging to keep history clean
- **Delete merged branches** to reduce clutter

### Commit Practices
- **Atomic commits**: One logical change per commit
- **Conventional commits**: Use standard prefixes (feat, fix, docs, refactor, test, chore)
- **Sign commits** when required by project policy
- **Rebase vs merge**: Follow project conventions consistently

## 🔒 Security & Performance

### Security First
- **Never commit secrets** or sensitive configuration
- **Use environment variables** for all configuration
- **Validate all inputs** at API boundaries
- **Follow OWASP guidelines** for web security
- **Regular dependency updates** and security scanning

### Performance Considerations
- **Profile before optimizing**: Measure actual bottlenecks
- **Cache strategically**: Use appropriate caching levels
- **Monitor resource usage**: CPU, memory, database connections
- **Optimize database queries**: Use EXPLAIN plans and indexing

## 🚨 Error Handling & Monitoring

### Robust Error Handling
- **Fail fast, fail clearly**: Provide meaningful error messages
- **Graceful degradation**: Handle partial failures appropriately
- **Log contextually**: Include relevant information for debugging
- **Don't swallow exceptions**: Always handle or re-throw appropriately

### Monitoring & Observability
- **Health checks** for all services
- **Metrics collection** for key performance indicators
- **Alerting** for critical failures and performance degradation
- **Distributed tracing** for complex request flows

## 🔧 Development Environment

### Consistency
- **Use consistent formatting**: Configure and use linters/formatters
- **Environment parity**: Development should mirror production closely
- **Dependency management**: Lock file versions and regular updates
- **IDE configuration**: Share relevant settings with the team

### Workflow Optimization
- **Automated checks**: Use pre-commit hooks and CI/CD pipelines
- **Hot reloading**: Configure for rapid development feedback
- **Debug configurations**: Maintain shared debugging setups
- **Documentation**: Keep setup instructions current and tested

---

## 📋 Quick Checklist

Before any code change:
- [ ] Read relevant architecture documentation
- [ ] Understand the full scope of changes needed
- [ ] Write/update tests for new functionality
- [ ] Validate against existing patterns and conventions
- [ ] Consider security and performance implications
- [ ] Update documentation if needed
- [ ] Test locally with realistic data
- [ ] Create descriptive commit message
- [ ] Submit for code review if required

---

**Remember**: These guidelines exist to maintain code quality, team productivity, and system reliability. When in doubt, ask the team rather than making assumptions.

*Last updated: [Current Date]*