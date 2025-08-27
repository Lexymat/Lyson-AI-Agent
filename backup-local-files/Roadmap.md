# 🚀 Lyson MVP Development Roadmap

## Project Structure
```
lyson/
├── lyson-backend/          # FastAPI + LangGraph
├── lyson-frontend/         # Next.js + Tailwind
├── lyson-shared/           # Shared types, constants
└── docs/                   # API docs, cursor rules
```

## Phase 0: Environment Setup (Day 1)
### 0.1 Repository Setup
- [ ] Fork `wassim249/fastapi-langgraph-agent-production-ready-template` → `lyson-backend`
- [ ] Fork `vercel/next.js` starter → `lyson-frontend`
- [ ] Create `lyson-shared` with TypeScript types and JSON schemas

### 0.2 Google Cloud Setup
- [ ] Enable Admin SDK Directory API & Reports API
- [ ] Create OAuth 2.0 credentials (Web application type)
- [ ] Set redirect URIs: `http://localhost:8000/auth/callback`, production URL
- [ ] Download credentials JSON

### 0.3 Development Environment
- [ ] Create `.cursorrules` file (see below)
- [ ] Set up environment variables structure
- [ ] Install Poetry for Python dependency management
- [ ] Configure pre-commit hooks

## Phase 1: Backend Core (Days 2-4)

### 1.1 Google Workspace Integration
**Base**: Use `googleworkspace/python-samples` as reference
- [ ] Implement OAuth2 flow using `fastapi-google-oauth-example`
- [ ] Create `app/services/google_workspace.py`:
  - [ ] `fetch_users()` - Get all users with lastLoginTime
  - [ ] `fetch_licenses()` - Get license assignments
  - [ ] `fetch_activity()` - Get login activity from Reports API
- [ ] Add rate limiting and pagination handling
- [ ] Create data models in `app/models/workspace.py`

### 1.2 Session Management
- [ ] Implement session tracking without user auth:
  ```python
  # app/models/session.py
  - session_id (UUID)
  - created_at
  - google_domain
  - status (processing/completed/failed)
  - report_url (temporary signed URL)
  ```
- [ ] Use Redis for temporary session storage (1-hour TTL)
- [ ] Implement cleanup job for expired sessions

### 1.3 Demo Mode
- [ ] Create `app/data/demo_datasets/`:
  - [ ] `techstartup.json` - 45 employees, Slack/Notion overlap
  - [ ] `growthco.json` - 78 employees, ex-employee licenses
  - [ ] `scalefast.json` - 32 employees, over-provisioning
- [ ] Add demo flag to session model
- [ ] Create demo data loader service

## Phase 2: AI Processing Pipeline (Days 5-7)

### 2.1 LangGraph State Machine
**Base**: Adapt `agent-service-toolkit` patterns
- [ ] Define state graph in `app/agents/audit_graph.py`:
  ```python
  States:
  1. DATA_VALIDATION
  2. NORMALIZATION
  3. MAPPING
  4. WASTE_DETECTION
  5. REPORT_GENERATION
  ```

### 2.2 Data Normalization Agent
- [ ] Create `app/agents/normalizer.py`:
  - [ ] Vendor name standardization (Google Workspace → standard names)
  - [ ] Pre-defined mappings for common Google SKUs:
    ```python
    SKU_MAPPINGS = {
        "Google-Apps-Unlimited": "Google Workspace Business Plus",
        "Google-Apps-For-Business": "Google Workspace Business Starter"
    }
    ```
  - [ ] LLM fallback for unknown SKUs

### 2.3 Intelligent Mapping Agent
- [ ] Create `app/agents/mapper.py`:
  - [ ] Map Google Workspace fields to audit fields:
    ```python
    FIELD_MAPPING = {
        "price": "sku.price",  # May need external pricing API
        "tier_plan": "sku.displayName",
        "last_login": "lastLoginTime",
        "user_name": "name.fullName",
        "license_name": "sku.displayName",
        "vendor": "Google Workspace",
        "employee_status": "suspended"
    }
    ```
  - [ ] LLM-based inference for missing fields

### 2.4 Waste Detection Engine
- [ ] Create `app/agents/detector.py`:
  - [ ] Rule-based detection:
    - Inactive > 60 days
    - Suspended users with active licenses
    - Multiple licenses same category
  - [ ] Scoring algorithm for confidence levels
  - [ ] Cost calculation (hardcode Google Workspace pricing for MVP)

## Phase 3: Report Generation (Days 8-9)

### 3.1 Report Templates
- [ ] Create `app/templates/report_template.html` for PDF
- [ ] Design sections:
  - Executive Summary
  - Waste Breakdown by Category
  - Detailed Findings Table
  - Recommendations with Confidence Scores

### 3.2 Report Services
**Base**: Use ReportLab examples
- [ ] Create `app/services/report_generator.py`:
  - [ ] JSON report structure definition
  - [ ] PDF generation with ReportLab
  - [ ] Signed URL generation (1-hour expiry)

## Phase 4: Frontend (Days 10-12)

### 4.1 Core Pages
- [ ] `/` - Landing page with value prop
- [ ] `/connect` - Google Workspace OAuth initiation
- [ ] `/processing` - Real-time status updates (WebSocket)
- [ ] `/report/[session_id]` - Report viewer/downloader
- [ ] `/demo` - Demo mode selector

### 4.2 Components
- [ ] `GoogleConnectButton` - OAuth flow trigger
- [ ] `ProcessingStatus` - Step-by-step progress
- [ ] `ReportViewer` - JSON data visualization
- [ ] `SavingsCounter` - Animated savings display

### 4.3 API Integration
- [ ] Create API client with proper error handling
- [ ] Implement WebSocket for real-time updates
- [ ] Add loading states and error boundaries

## Phase 5: Testing & Validation (Days 13-14)

### 5.1 Test Data & Validation
- [ ] Create test dataset with known waste patterns
- [ ] Implement accuracy measurement:
  ```python
  # app/tests/test_accuracy.py
  - Test 100 licenses dataset
  - Measure detection rate
  - Validate >= 85% accuracy
  ```

### 5.2 Integration Tests
- [ ] Test Google Workspace API integration
- [ ] Test end-to-end flow with demo data
- [ ] Performance test (<60 seconds for 100 licenses)

### 5.3 Error Handling
- [ ] API rate limit handling
- [ ] Partial data scenarios
- [ ] Network failure recovery

## Phase 6: Deployment (Day 15)

### 6.1 Backend Deployment
- [ ] Deploy to Railway/Render
- [ ] Configure environment variables
- [ ] Set up Redis for sessions
- [ ] Configure CORS for frontend

### 6.2 Frontend Deployment
- [ ] Deploy to Vercel
- [ ] Configure environment variables
- [ ] Set up error tracking (Sentry)

### 6.3 Monitoring
- [ ] Set up basic logging
- [ ] Create health check endpoints
- [ ] Monitor API usage and costs

---

## 📝 Cursor Rules File (.cursorrules)

```markdown
# Lyson MVP Cursor Rules

## Project Context
Building an AI-powered SaaS license audit tool MVP that connects to Google Workspace via OAuth2, detects waste, and generates reports.

## Code Standards

### Python (Backend)
- Use Python 3.11+
- Follow PEP 8 strictly
- Type hints for all functions
- Docstrings for all classes and public methods
- Use Pydantic for data validation
- Async/await for all I/O operations
- Handle all exceptions explicitly

### TypeScript (Frontend)
- Use TypeScript strict mode
- Interfaces over types when possible
- No `any` types
- Proper error boundaries
- Loading and error states for all async operations

## Architecture Patterns

### Backend Structure
```
app/
├── api/          # FastAPI routes
├── agents/       # LangGraph agents
├── models/       # Pydantic models
├── services/     # Business logic
├── utils/        # Helpers
└── config.py     # Settings
```

### API Design
- RESTful endpoints
- Consistent error responses: `{"error": string, "detail": string, "status_code": number}`
- Use HTTP status codes correctly
- Validate all inputs with Pydantic

### LangGraph Agents
- Each agent is a single responsibility
- Clear state transitions
- Comprehensive error handling
- Log all LLM calls with costs

## Google Workspace Integration
- Always use batch requests when possible
- Handle pagination automatically
- Respect rate limits (implement exponential backoff)
- Request minimal scopes needed

## Security & Privacy
- NEVER log PII data
- Session data expires after 1 hour
- Use secrets management for API keys
- Validate all OAuth tokens
- Sanitize all user inputs

## Testing Requirements
- Unit tests for all business logic
- Integration tests for API endpoints
- Mock external APIs in tests
- Test coverage > 80%

## Performance Targets
- Process 100 licenses < 60 seconds
- API response time < 500ms (excluding LLM)
- Frontend initial load < 3 seconds

## Error Messages
- User-friendly error messages
- Technical details in logs only
- Suggest actions when possible
- Never expose internal errors

## LLM Usage
- Use GPT-3.5 for simple tasks
- Use GPT-4 only for complex reasoning
- Cache LLM responses when possible
- Always have non-LLM fallbacks

## Documentation
- Comment complex logic only
- Update README with setup changes
- Document all API endpoints
- Include examples in docstrings

## Git Commits
- Conventional commits format
- One feature per commit
- Test before committing
- No commented code

## When Uncertain
1. Prioritize working code over perfect code
2. Use existing libraries over custom solutions
3. Choose simple over clever
4. Ask for clarification on business logic
5. Default to more restrictive security
```

---

## 🎯 Success Metrics Tracking

### Week 1 Checkpoints
- [ ] OAuth flow working with test Google Workspace
- [ ] Can fetch and display user/license data
- [ ] Basic waste detection identifies inactive users

### Week 2 Checkpoints
- [ ] Full pipeline processes 100 licenses < 60 seconds
- [ ] PDF reports generate correctly
- [ ] Demo mode fully functional
- [ ] 85% accuracy on test dataset

### Launch Checklist
- [ ] All automated tests passing
- [ ] Error handling for all edge cases
- [ ] Performance targets met
- [ ] Security review completed
- [ ] Documentation complete
- [ ] Demo video recorded

---

## 🚨 Critical Path Dependencies

1. **Google Workspace API Access** → Blocks everything
2. **OAuth Flow** → Blocks real data testing
3. **LangGraph Pipeline** → Blocks report generation
4. **Report Generation** → Blocks user value delivery

Focus on these in order to minimize blockers.

---

This roadmap provides a clear, no-ambiguity path to launch your MVP in 15 days, leveraging existing repositories and maintaining high code quality through comprehensive cursor rules.