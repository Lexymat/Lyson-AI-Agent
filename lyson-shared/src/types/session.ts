// ========== Session Management Types ==========

export interface Session {
  id: string;
  createdAt: string;
  expiresAt: string;
  googleDomain?: string;
  status: 'processing' | 'completed' | 'failed';
  reportUrl?: string;
  isDemo: boolean;
  progress: {
    currentStep: string;
    totalSteps: number;
    completedSteps: number;
    estimatedTimeRemaining?: number;
  };
  error?: {
    message: string;
    code: string;
    details?: any;
  };
}

export interface ProcessingStep {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  startedAt?: string;
  completedAt?: string;
  error?: string;
  metadata?: any;
}

export interface SessionProgress {
  sessionId: string;
  steps: ProcessingStep[];
  currentStep: string;
  overallProgress: number; // 0-100
  estimatedCompletionTime?: string;
}


