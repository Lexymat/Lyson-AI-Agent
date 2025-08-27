# Lyson Shared

Shared TypeScript types and schemas for the Lyson AI Agent project.

## 📦 Installation

```bash
cd lyson-shared
npm install
```

## 🔧 Development

```bash
# Build the package
npm run build

# Watch for changes
npm run dev

# Clean build artifacts
npm run clean
```

## 📁 Structure

```
src/
├── types/          # TypeScript interfaces
│   ├── workspace.ts  # Google Workspace types
│   ├── audit.ts      # Audit and waste detection types
│   └── session.ts    # Session management types
├── schemas/        # Zod validation schemas
│   └── api.ts       # API request/response schemas
└── index.ts        # Main export file
```

## 🎯 Usage

### In Frontend
```typescript
import { Session, AuditReport } from 'lyson-shared';

const session: Session = {
  id: 'session-123',
  status: 'processing',
  // ... other properties
};
```

### In Backend (Python)
The backend uses Pydantic models that mirror these TypeScript types.

## 🔄 Type Synchronization

This package ensures type consistency between:
- Frontend (TypeScript)
- Backend (Python/Pydantic)
- API contracts
- Database schemas

## 📝 Adding New Types

1. Create the type in the appropriate file under `src/types/`
2. Add validation schema in `src/schemas/` if needed
3. Export from `src/index.ts`
4. Update this README if necessary

## 🚨 Important Notes

- All types are strictly typed
- Zod schemas provide runtime validation
- Changes here affect both frontend and backend
- Always build after making changes


