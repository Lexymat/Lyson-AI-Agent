// ========== Google Workspace Types ==========

export interface GoogleUser {
  id: string;
  primaryEmail: string;
  name: {
    fullName: string;
    givenName: string;
    familyName: string;
  };
  suspended: boolean;
  lastLoginTime: string;
  creationTime: string;
  isAdmin: boolean;
  isEnforcedIn2Sv: boolean;
  isEnrolledIn2Sv: boolean;
}

export interface GoogleLicense {
  id: string;
  skuId: string;
  sku: {
    name: string;
    displayName: string;
    description: string;
  };
  userId: string;
  state: 'ACTIVE' | 'SUSPENDED' | 'DELETED';
  purchaseOrderId?: string;
  assignedQuantity: number;
  maxQuantity: number;
  cost: {
    amount: number;
    currency: string;
  };
}

export interface GoogleWorkspaceData {
  users: GoogleUser[];
  licenses: GoogleLicense[];
  domain: string;
  totalUsers: number;
  totalLicenses: number;
  lastSyncTime: string;
}


