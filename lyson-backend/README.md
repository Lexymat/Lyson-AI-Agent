# Lyson Backend

AI-powered SaaS license audit tool backend built with FastAPI and LangGraph.

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Poetry (for dependency management)
- Redis (for session storage)

### Setup

1. **Install dependencies:**
   ```bash
   cd lyson-backend
   poetry install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your actual values
   ```

3. **Start Redis:**
   ```bash
   # On Windows with Docker:
   docker run -d -p 6379:6379 redis:alpine
   
   # Or install Redis locally
   ```

4. **Run the development server:**
   ```bash
   poetry run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

## 📁 Project Structure

```
app/
├── api/          # FastAPI routes
├── agents/       # LangGraph agents
├── models/       # Pydantic models
├── services/     # Business logic
├── utils/        # Helper functions
├── data/         # Demo datasets
├── templates/    # Report templates
└── config.py     # Settings
```

## 🔧 Configuration

Key environment variables:
- `GOOGLE_CLIENT_ID` - Google OAuth2 Client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth2 Client Secret
- `OPENAI_API_KEY` - OpenAI API key for LLM processing
- `REDIS_URL` - Redis connection URL
- `SECRET_KEY` - JWT secret key

## 🧪 Testing

```bash
# Run all tests
poetry run pytest

# Run with coverage
poetry run pytest --cov=app

# Run specific test file
poetry run pytest tests/test_workspace.py
```

## 📚 API Documentation

Once running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 🔄 Development Workflow

1. Make changes
2. Run tests: `poetry run pytest`
3. Format code: `poetry run black .`
4. Sort imports: `poetry run isort .`
5. Type check: `poetry run mypy app/`
6. Commit changes

## 🚨 Important Notes

- All API responses follow consistent error format
- Session data expires after 1 hour
- Rate limiting is implemented for Google Workspace API
- LLM calls are logged with costs
- No PII data is logged


