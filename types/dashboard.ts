// Job Management Types
export interface Job {
  id: string;
  title: string;
  description: string;
  customerId: string;
  customerName: string;
  address: string;
  scheduledDate: string;
  scheduledTime: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  estimatedDuration: number; // in minutes
  assignedTechnician?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobFilter {
  status?: Job['status'];
  priority?: Job['priority'];
  dateFrom?: string;
  dateTo?: string;
  customerId?: string;
  technicianId?: string;
}

// Customer Management Types
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  notes?: string;
  totalJobs: number;
  totalSpent: number;
  lastServiceDate?: string;
  createdAt: string;
  status: 'active' | 'inactive';
}

// Invoice Management Types
export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  jobId?: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  dueDate: string;
  issueDate: string;
  paidDate?: string;
  items: InvoiceItem[];
  notes?: string;
  taxAmount: number;
  totalAmount: number;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

// Settings Types
export interface BusinessSettings {
  companyName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  phone: string;
  email: string;
  website?: string;
  businessHours: {
    [key: string]: {
      open: string;
      close: string;
      isOpen: boolean;
    };
  };
  serviceTags: string[];
  defaultHourlyRate: number;
  taxRate: number;
  invoiceSettings: {
    autoSend: boolean;
    defaultTerms: string;
    logoUrl?: string;
  };
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon: any;
  current?: boolean;
}

// Dashboard Stats Types
export interface DashboardStats {
  totalJobs: number;
  completedJobs: number;
  pendingJobs: number;
  totalRevenue: number;
  monthlyRevenue: number;
  totalCustomers: number;
  overdueInvoices: number;
} 