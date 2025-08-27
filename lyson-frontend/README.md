# Lyson Frontend

Modern React frontend for the AI-powered SaaS license audit tool.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Install dependencies:**
   ```bash
   cd lyson-frontend
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
├── app/              # Next.js 13+ app directory
│   ├── (routes)/     # Route groups
│   ├── api/          # API routes
│   └── globals.css   # Global styles
├── components/       # Reusable components
├── lib/             # Utility functions
├── types/           # TypeScript types
└── public/          # Static assets
```

## 🎨 Design System

Built with:
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Inter Font** - Modern typeface

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📱 Pages

- `/` - Landing page with value proposition
- `/connect` - Google Workspace OAuth initiation
- `/processing` - Real-time status updates
- `/report/[session_id]` - Report viewer/downloader
- `/demo` - Demo mode selector

## 🧩 Components

- `GoogleConnectButton` - OAuth flow trigger
- `ProcessingStatus` - Step-by-step progress
- `ReportViewer` - JSON data visualization
- `SavingsCounter` - Animated savings display

## 🔄 API Integration

The frontend communicates with the backend via:
- REST API calls using Axios
- WebSocket connections for real-time updates
- Proper error handling and loading states

## 🎯 Features

- **Responsive Design** - Works on all devices
- **Real-time Updates** - WebSocket-powered progress tracking
- **Error Boundaries** - Graceful error handling
- **Loading States** - Smooth user experience
- **Type Safety** - Full TypeScript coverage

## 🚨 Important Notes

- All API calls include proper error handling
- Loading states for all async operations
- Responsive design for mobile and desktop
- Accessibility features included
- SEO optimized with proper meta tags


