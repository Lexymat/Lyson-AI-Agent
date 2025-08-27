# 🚀 Lyson AI Agent

AI-powered SaaS license audit tool that connects to Google Workspace, detects waste, and generates actionable reports.

## 🎯 What is Lyson?

Lyson is an intelligent tool that helps companies identify and eliminate SaaS license waste by:
- Connecting to Google Workspace via OAuth2
- Analyzing user activity and license usage
- Detecting inactive users, duplicate licenses, and over-provisioning
- Generating detailed reports with cost savings recommendations

## 📁 Project Structure

```
lyson/
├── lyson-backend/          # FastAPI + LangGraph backend
├── lyson-frontend/         # Next.js + Tailwind frontend
├── lyson-shared/           # Shared TypeScript types
├── DOCS/                   # Documentation
├── Roadmap.txt            # Development roadmap
├── PRD.txt                # Product requirements
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- Redis (for session storage)
- Poetry (Python dependency management)

### Backend Setup

1. **Navigate to backend:**
   ```bash
   cd lyson-backend
   ```

2. **Install dependencies:**
   ```bash
   poetry install
   ```

3. **Set up environment:**
   ```bash
   cp env.example .env
   # Edit .env with your API keys
   ```

4. **Start Redis:**
   ```bash
   # Using Docker (recommended)
   docker run -d -p 6379:6379 redis:alpine
   ```

5. **Run the server:**
   ```bash
   poetry run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend Setup

1. **Navigate to frontend:**
   ```bash
   cd lyson-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set environment:**
   ```bash
   # Create .env.local
   echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 🔧 Configuration

### Required API Keys

1. **Google Workspace API:**
   - Enable Admin SDK Directory API
   - Enable Reports API
   - Create OAuth 2.0 credentials
   - Set redirect URI: `http://localhost:8000/auth/callback`

2. **OpenAI API:**
   - Get API key from OpenAI dashboard
   - Used for intelligent waste detection

3. **Redis:**
   - For session storage and caching
   - Can use local Redis or cloud service

## 📚 Documentation

- [Backend README](lyson-backend/README.md) - Backend setup and API docs
- [Frontend README](lyson-frontend/README.md) - Frontend development guide
- [Shared Types README](lyson-shared/README.md) - Type definitions
- [Roadmap](Roadmap.txt) - Development timeline and phases
- [PRD](PRD.txt) - Product requirements document

## 🧪 Testing

### Backend Tests
```bash
cd lyson-backend
poetry run pytest
```

### Frontend Tests
```bash
cd lyson-frontend
npm run test
```

## 🚀 Deployment

### Backend (Railway/Render)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Frontend (Vercel)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

## 🎯 Features

- **🔐 Secure OAuth2** - Google Workspace integration
- **🤖 AI-Powered Analysis** - Intelligent waste detection
- **📊 Real-time Reports** - Detailed cost savings analysis
- **🔄 Live Progress** - WebSocket-powered updates
- **📱 Responsive Design** - Works on all devices
- **🎭 Demo Mode** - Try with sample data

## 🚨 Important Notes

- Session data expires after 1 hour
- No PII data is logged
- Rate limiting implemented for Google API
- All API responses follow consistent error format
- Type safety across frontend and backend

## 🤝 Contributing

1. Follow the roadmap phases
2. Use conventional commits
3. Write tests for new features
4. Update documentation
5. Ensure type safety

## 📄 License

This project is proprietary software.

---

**Ready to eliminate SaaS waste?** 🎯

Start with the [Roadmap](Roadmap.txt) to understand the development phases, or jump right into setup with the backend and frontend READMEs.


