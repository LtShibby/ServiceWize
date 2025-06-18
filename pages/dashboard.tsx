import Head from 'next/head';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { mockDashboardStats, mockJobs, mockInvoices } from '@/lib/mockData';

export default function Dashboard() {
  const stats = mockDashboardStats;
  const recentJobs = mockJobs.slice(0, 3);
  const recentInvoices = mockInvoices.slice(0, 3);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'sent':
        return 'bg-blue-100 text-blue-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
      <Head>
        <title>Dashboard - ServiceWize</title>
        <meta name="description" content="ServiceWize dashboard overview" />
      </Head>

      <DashboardLayout title="Dashboard">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="bg-white rounded-lg shadow p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="ml-3 lg:ml-4 min-w-0">
                <p className="text-xs lg:text-sm font-medium text-gray-600 truncate">Total Jobs</p>
                <p className="text-xl lg:text-2xl font-semibold text-gray-900">{stats.totalJobs}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3 lg:ml-4 min-w-0">
                <p className="text-xs lg:text-sm font-medium text-gray-600 truncate">Completed</p>
                <p className="text-xl lg:text-2xl font-semibold text-gray-900">{stats.completedJobs}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3 lg:ml-4 min-w-0">
                <p className="text-xs lg:text-sm font-medium text-gray-600 truncate">Pending Jobs</p>
                <p className="text-xl lg:text-2xl font-semibold text-gray-900">{stats.pendingJobs}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-3 lg:ml-4 min-w-0">
                <p className="text-xs lg:text-sm font-medium text-gray-600 truncate">Monthly Revenue</p>
                <p className="text-xl lg:text-2xl font-semibold text-gray-900">{formatCurrency(stats.monthlyRevenue)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Recent Jobs */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
              <h3 className="text-base lg:text-lg font-medium text-gray-900">Recent Jobs</h3>
            </div>
            <div className="p-4 lg:p-6">
              <div className="space-y-4">
                {recentJobs.map((job) => (
                  <div key={job.id} className="flex items-start sm:items-center justify-between p-3 lg:p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 min-w-0 mr-3">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{job.title}</h4>
                      <p className="text-sm text-gray-600 truncate">{job.customerName}</p>
                      <p className="text-xs text-gray-500">{formatDate(job.scheduledDate)} at {job.scheduledTime}</p>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a href="/jobs" className="text-sm text-primary hover:text-blue-700 font-medium">
                  View all jobs →
                </a>
              </div>
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
              <h3 className="text-base lg:text-lg font-medium text-gray-900">Recent Invoices</h3>
            </div>
            <div className="p-4 lg:p-6">
              <div className="space-y-4">
                {recentInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-start sm:items-center justify-between p-3 lg:p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 min-w-0 mr-3">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{invoice.invoiceNumber}</h4>
                      <p className="text-sm text-gray-600 truncate">{invoice.customerName}</p>
                      <p className="text-xs text-gray-500">Due: {formatDate(invoice.dueDate)}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-medium text-gray-900">{formatCurrency(invoice.totalAmount)}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a href="/invoices" className="text-sm text-primary hover:text-blue-700 font-medium">
                  View all invoices →
                </a>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
} 