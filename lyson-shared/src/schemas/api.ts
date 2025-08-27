// ========== API Schemas using Zod ==========

import { z } from 'zod';

// Session creation request
export const CreateSessionSchema = z.object({
  googleDomain: z.string().optional(),
  isDemo: z.boolean().default(false),
  demoDataset: z.enum(['techstartup', 'growthco', 'scalefast']).optional(),
});

// Session response
export const SessionSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  expiresAt: z.string(),
  googleDomain: z.string().optional(),
  status: z.enum(['processing', 'completed', 'failed']),
  reportUrl: z.string().optional(),
  isDemo: z.boolean(),
  progress: z.object({
    currentStep: z.string(),
    totalSteps: z.number(),
    completedSteps: z.number(),
    estimatedTimeRemaining: z.number().optional(),
  }),
  error: z.object({
    message: z.string(),
    code: z.string(),
    details: z.any().optional(),
  }).optional(),
});

// Progress update
export const ProgressUpdateSchema = z.object({
  sessionId: z.string(),
  currentStep: z.string(),
  completedSteps: z.number(),
  totalSteps: z.number(),
  estimatedTimeRemaining: z.number().optional(),
});

// Error response
export const ErrorResponseSchema = z.object({
  error: z.string(),
  detail: z.string(),
  status_code: z.number(),
});

// Success response wrapper
export const SuccessResponseSchema = z.object({
  status: z.literal('success'),
  data: z.any(),
});

// API response union
export const ApiResponseSchema = z.union([
  SuccessResponseSchema,
  ErrorResponseSchema,
]);


