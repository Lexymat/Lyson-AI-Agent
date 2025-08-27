// ========== Audit and Waste Detection Types ==========

export interface AuditLicense {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  licenseName: string;
  vendor: string;
  tierPlan: string;
  price: number;
  currency: string;
  lastLogin: string;
  employeeStatus: 'active' | 'inactive' | 'suspended' | 'terminated';
  isWaste: boolean;
  wasteReason?: string;
  confidence: number; // 0-1 confidence score
  monthlySavings: number;
}

export interface WasteCategory {
  category: string;
  description: string;
  licenses: AuditLicense[];
  totalSavings: number;
  count: number;
}

export interface AuditReport {
  id: string;
  sessionId: string;
  generatedAt: string;
  domain: string;
  summary: {
    totalLicenses: number;
    totalWaste: number;
    totalSavings: number;
    accuracy: number;
  };
  categories: WasteCategory[];
  recommendations: Recommendation[];
  metadata: {
    processingTime: number;
    modelVersion: string;
    confidenceThreshold: number;
  };
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  savings: number;
  confidence: number;
  actionItems: string[];
}


