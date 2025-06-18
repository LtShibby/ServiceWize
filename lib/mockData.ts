import { Job, Customer, Invoice, BusinessSettings, DashboardStats } from '@/types/dashboard';

// Mock Jobs Data
export const mockJobs: Job[] = [
  {
    id: 'job-1',
    title: 'Kitchen Sink Repair',
    description: 'Replace kitchen sink faucet and fix water pressure issue',
    customerId: 'customer-1',
    customerName: 'John Smith',
    address: '123 Main St, Austin, TX 78701',
    scheduledDate: '2025-06-15',
    scheduledTime: '09:00',
    status: 'scheduled',
    priority: 'medium',
    estimatedDuration: 120,
    assignedTechnician: 'Mike Johnson',
    notes: 'Customer mentioned leak started 3 days ago',
    createdAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-01-10T10:00:00Z'
  },
  {
    id: 'job-2',
    title: 'HVAC System Maintenance',
    description: 'Annual HVAC system inspection and filter replacement',
    customerId: 'customer-2',
    customerName: 'Sarah Wilson',
    address: '456 Oak Ave, Austin, TX 78702',
    scheduledDate: '2025-06-16',
    scheduledTime: '14:00',
    status: 'in-progress',
    priority: 'low',
    estimatedDuration: 90,
    assignedTechnician: 'Dave Rodriguez',
    createdAt: '2025-01-09T14:30:00Z',
    updatedAt: '2025-01-16T14:00:00Z'
  },
  {
    id: 'job-3',
    title: 'Electrical Panel Upgrade',
    description: 'Upgrade main electrical panel to 200 amp service',
    customerId: 'customer-3',
    customerName: 'Robert Brown',
    address: '789 Pine St, Austin, TX 78703',
    scheduledDate: '2025-06-18',
    scheduledTime: '08:00',
    status: 'completed',
    priority: 'high',
    estimatedDuration: 480,
    assignedTechnician: 'Alex Thompson',
    notes: 'Permit approved, materials ordered',
    createdAt: '2025-01-05T09:00:00Z',
    updatedAt: '2025-01-14T16:30:00Z'
  },
  {
    id: 'job-4',
    title: 'Bathroom Plumbing',
    description: 'Install new bathroom vanity and update plumbing',
    customerId: 'customer-1',
    customerName: 'John Smith',
    address: '123 Main St, Austin, TX 78701',
    scheduledDate: '2025-06-18',
    scheduledTime: '10:00',
    status: 'scheduled',
    priority: 'medium',
    estimatedDuration: 240,
    assignedTechnician: 'Mike Johnson',
    createdAt: '2025-01-12T11:00:00Z',
    updatedAt: '2025-01-12T11:00:00Z'
  },
  {
    id: 'job-5',
    title: 'AC Unit Replacement',
    description: 'Replace central AC unit and install new thermostat',
    customerId: 'customer-2',
    customerName: 'Sarah Wilson',
    address: '456 Oak Ave, Austin, TX 78702',
    scheduledDate: '2025-06-19',
    scheduledTime: '08:00',
    status: 'completed',
    priority: 'high',
    estimatedDuration: 360,
    assignedTechnician: 'Dave Rodriguez',
    notes: 'Old unit is 15 years old, running inefficiently',
    createdAt: '2025-06-02T00:00:00Z',
    updatedAt: '2025-06-05T00:00:00Z'
  },
  {
    id: 'job-6',
    title: 'Toilet Installation',
    description: 'Install two new water-efficient toilets',
    customerId: 'customer-4',
    customerName: 'Lisa Davis',
    address: '321 Elm Dr, Austin, TX 78704',
    scheduledDate: '2025-06-19',
    scheduledTime: '10:00',
    status: 'in-progress',
    priority: 'medium',
    estimatedDuration: 180,
    assignedTechnician: 'Mike Johnson',
    notes: 'Apply senior discount',
    createdAt: '2025-06-07T00:00:00Z',
    updatedAt: '2025-06-10T00:00:00Z'
  },
  {
    id: 'job-7',
    title: 'Breaker Box Inspection',
    description: 'Inspect electrical breaker box and replace worn breakers',
    customerId: 'customer-3',
    customerName: 'Robert Brown',
    address: '789 Pine St, Austin, TX 78703',
    scheduledDate: '2025-06-17',
    scheduledTime: '12:00',
    status: 'in-progress',
    priority: 'low',
    estimatedDuration: 120,
    assignedTechnician: 'Alex Thompson',
    notes: 'Check for corrosion or loose wires',
    createdAt: '2025-06-12T00:00:00Z',
    updatedAt: '2025-06-15T00:00:00Z'
  },
  {
    id: 'job-8',
    title: 'Duct Cleaning',
    description: 'Clean all HVAC ducts and replace air filters',
    customerId: 'customer-2',
    customerName: 'Sarah Wilson',
    address: '456 Oak Ave, Austin, TX 78702',
    scheduledDate: '2025-06-20',
    scheduledTime: '08:00',
    status: 'completed',
    priority: 'medium',
    estimatedDuration: 150,
    assignedTechnician: 'Dave Rodriguez',
    notes: 'Use HEPA vacuum and deodorize',
    createdAt: '2025-06-17T00:00:00Z',
    updatedAt: '2025-06-20T00:00:00Z'
  },
  {
    id: 'job-9',
    title: 'AC Unit Replacement',
    description: 'Replace central AC unit and install new thermostat',
    customerId: 'customer-2',
    customerName: 'Sarah Wilson',
    address: '456 Oak Ave, Austin, TX 78702',
    scheduledDate: '2025-07-05',
    scheduledTime: '10:00',
    status: 'completed',
    priority: 'high',
    estimatedDuration: 360,
    assignedTechnician: 'Dave Rodriguez',
    notes: 'Old unit is 15 years old, running inefficiently',
    createdAt: '2025-07-02T00:00:00Z',
    updatedAt: '2025-07-05T00:00:00Z'
  },
  {
    id: 'job-10',
    title: 'Toilet Installation',
    description: 'Install two new water-efficient toilets',
    customerId: 'customer-4',
    customerName: 'Lisa Davis',
    address: '321 Elm Dr, Austin, TX 78704',
    scheduledDate: '2025-07-10',
    scheduledTime: '12:00',
    status: 'scheduled',
    priority: 'medium',
    estimatedDuration: 180,
    assignedTechnician: 'Mike Johnson',
    notes: 'Apply senior discount',
    createdAt: '2025-07-07T00:00:00Z',
    updatedAt: '2025-07-10T00:00:00Z'
  },
  {
    id: 'job-11',
    title: 'Breaker Box Inspection',
    description: 'Inspect electrical breaker box and replace worn breakers',
    customerId: 'customer-3',
    customerName: 'Robert Brown',
    address: '789 Pine St, Austin, TX 78703',
    scheduledDate: '2025-07-15',
    scheduledTime: '14:00',
    status: 'in-progress',
    priority: 'low',
    estimatedDuration: 120,
    assignedTechnician: 'Alex Thompson',
    notes: 'Check for corrosion or loose wires',
    createdAt: '2025-07-12T00:00:00Z',
    updatedAt: '2025-07-15T00:00:00Z'
  },
  {
    id: 'job-12',
    title: 'Duct Cleaning',
    description: 'Clean all HVAC ducts and replace air filters',
    customerId: 'customer-2',
    customerName: 'Sarah Wilson',
    address: '456 Oak Ave, Austin, TX 78702',
    scheduledDate: '2025-07-20',
    scheduledTime: '08:00',
    status: 'scheduled',
    priority: 'medium',
    estimatedDuration: 150,
    assignedTechnician: 'Dave Rodriguez',
    notes: 'Use HEPA vacuum and deodorize',
    createdAt: '2025-07-17T00:00:00Z',
    updatedAt: '2025-07-20T00:00:00Z'
  }
];

// Mock Customers Data
export const mockCustomers: Customer[] = [
  {
    id: 'customer-1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '(512) 555-0123',
    address: {
      street: '123 Main St',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701'
    },
    notes: 'Preferred customer, always pays on time',
    totalJobs: 12,
    totalSpent: 4850.00,
    lastServiceDate: '2025-01-14',
    createdAt: '2024-03-15T00:00:00Z',
    status: 'active'
  },
  {
    id: 'customer-2',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@email.com',
    phone: '(512) 555-0456',
    address: {
      street: '456 Oak Ave',
      city: 'Austin',
      state: 'TX',
      zipCode: '78702'
    },
    notes: 'Commercial property manager',
    totalJobs: 8,
    totalSpent: 3200.00,
    lastServiceDate: '2025-01-16',
    createdAt: '2024-06-20T00:00:00Z',
    status: 'active'
  },
  {
    id: 'customer-3',
    name: 'Robert Brown',
    email: 'robert.brown@email.com',
    phone: '(512) 555-0789',
    address: {
      street: '789 Pine St',
      city: 'Austin',
      state: 'TX',
      zipCode: '78703'
    },
    totalJobs: 3,
    totalSpent: 1890.00,
    lastServiceDate: '2025-01-14',
    createdAt: '2024-11-10T00:00:00Z',
    status: 'active'
  },
  {
    id: 'customer-4',
    name: 'Lisa Davis',
    email: 'lisa.davis@email.com',
    phone: '(512) 555-0321',
    address: {
      street: '321 Elm Dr',
      city: 'Austin',
      state: 'TX',
      zipCode: '78704'
    },
    notes: 'Senior citizen discount applied',
    totalJobs: 5,
    totalSpent: 1250.00,
    lastServiceDate: '2024-12-20',
    createdAt: '2024-08-05T00:00:00Z',
    status: 'active'
  }
];

// Mock Invoices Data
export const mockInvoices: Invoice[] = [
  {
    id: 'invoice-1',
    invoiceNumber: 'INV-2025-001',
    customerId: 'customer-1',
    customerName: 'John Smith',
    jobId: 'job-3',
    amount: 1850.00,
    status: 'paid',
    dueDate: '2025-01-29',
    issueDate: '2025-01-14',
    paidDate: '2025-01-15',
    taxAmount: 148.00,
    totalAmount: 1998.00,
    items: [
      {
        id: 'item-1',
        description: 'Electrical panel upgrade labor',
        quantity: 8,
        unitPrice: 125.00,
        totalPrice: 1000.00
      },
      {
        id: 'item-2',
        description: '200 amp electrical panel',
        quantity: 1,
        unitPrice: 450.00,
        totalPrice: 450.00
      },
      {
        id: 'item-3',
        description: 'Electrical materials and supplies',
        quantity: 1,
        unitPrice: 400.00,
        totalPrice: 400.00
      }
    ],
    notes: 'Permit fees included in materials cost'
  },
  {
    id: 'invoice-2',
    invoiceNumber: 'INV-2025-002',
    customerId: 'customer-2',
    customerName: 'Sarah Wilson',
    amount: 350.00,
    status: 'sent',
    dueDate: '2025-02-01',
    issueDate: '2025-01-16',
    taxAmount: 28.00,
    totalAmount: 378.00,
    items: [
      {
        id: 'item-4',
        description: 'HVAC maintenance service',
        quantity: 1,
        unitPrice: 200.00,
        totalPrice: 200.00
      },
      {
        id: 'item-5',
        description: 'Air filter replacement (premium)',
        quantity: 3,
        unitPrice: 50.00,
        totalPrice: 150.00
      }
    ]
  },
  {
    id: 'invoice-3',
    invoiceNumber: 'INV-2025-003',
    customerId: 'customer-1',
    customerName: 'John Smith',
    amount: 475.00,
    status: 'overdue',
    dueDate: '2025-01-10',
    issueDate: '2024-12-25',
    taxAmount: 38.00,
    totalAmount: 513.00,
    items: [
      {
        id: 'item-6',
        description: 'Kitchen faucet installation',
        quantity: 1,
        unitPrice: 275.00,
        totalPrice: 275.00
      },
      {
        id: 'item-7',
        description: 'Premium kitchen faucet',
        quantity: 1,
        unitPrice: 200.00,
        totalPrice: 200.00
      }
    ],
    notes: 'Payment reminder sent 3 times'
  }
];

// Mock Business Settings
export const mockBusinessSettings: BusinessSettings = {
  companyName: 'VanBuren Plumbing & HVAC',
  address: {
    street: '555 Business Blvd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701'
  },
  phone: '(512) 555-PLUMB',
  email: 'info@vanburenplumbing.com',
  website: 'www.vanburenplumbing.com',
  businessHours: {
    monday: { open: '07:00', close: '18:00', isOpen: true },
    tuesday: { open: '07:00', close: '18:00', isOpen: true },
    wednesday: { open: '07:00', close: '18:00', isOpen: true },
    thursday: { open: '07:00', close: '18:00', isOpen: true },
    friday: { open: '07:00', close: '18:00', isOpen: true },
    saturday: { open: '08:00', close: '16:00', isOpen: true },
    sunday: { open: '00:00', close: '00:00', isOpen: false }
  },
  serviceTags: ['Plumbing', 'HVAC', 'Electrical', 'Emergency Repair'],
  defaultHourlyRate: 125.00,
  taxRate: 8.0,
  invoiceSettings: {
    autoSend: true,
    defaultTerms: 'Net 15 days. Late fees may apply after due date.',
    logoUrl: '/images/company-logo.png'
  }
};

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  totalJobs: 4,
  completedJobs: 1,
  pendingJobs: 3,
  totalRevenue: 2675.00,
  monthlyRevenue: 2298.00,
  totalCustomers: 4,
  overdueInvoices: 1
}; 