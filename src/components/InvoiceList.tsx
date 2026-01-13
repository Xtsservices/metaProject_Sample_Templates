import React, { useState } from 'react';
import { Eye, Trash2, MoreVertical } from 'lucide-react';

interface Invoice {
  id: string;
  period: string;
  issuedTo: string;
  paymentMethod: string;
  status: 'Pending' | 'Canceled' | 'Invalid' | 'Overdue' | 'On hold';
  issueDate: string;
  dueDate: string | null;
  dueDateLabel?: string;
  amount: number;
  vat: number;
}

const InvoiceList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const invoices: Invoice[] = [
    { id: '#0013', period: 'November 2017', issuedTo: 'Liam', paymentMethod: 'Wire transfer', status: 'Pending', issueDate: 'February 25, 2018', dueDate: null, dueDateLabel: 'Paid on Feb 15, 2018', amount: 885, vat: 124 },
    { id: '#0014', period: 'December 2017', issuedTo: 'Elijah', paymentMethod: 'Paypal', status: 'Canceled', issueDate: 'March 2, 2018', dueDate: 'On hold', amount: 985, vat: 458 },
    { id: '#0015', period: 'December 2017', issuedTo: 'Matthew', paymentMethod: 'Payoneer', status: 'Invalid', issueDate: 'March 23, 2018', dueDate: '6 days', amount: 389, vat: 85 },
    { id: '#0016', period: 'December 2017', issuedTo: 'Anthony', paymentMethod: 'Paypal', status: 'Overdue', issueDate: 'March 7, 2018', dueDate: '15 days', amount: 985, vat: 365 },
    { id: '#0017', period: 'December 2017', issuedTo: 'Daniel', paymentMethod: 'Wire transfer', status: 'Pending', issueDate: 'May 6, 2018', dueDate: '6 days', amount: 887, vat: 845 },
    { id: '#0018', period: 'January 2018', issuedTo: 'Aiden', paymentMethod: 'Skrill', status: 'Pending', issueDate: 'June 17, 2018', dueDate: 'On hold', amount: 358, vat: 652 },
    { id: '#0019', period: 'January 2018', issuedTo: 'Alexander', paymentMethod: 'Paypal', status: 'On hold', issueDate: 'December 26, 2017', dueDate: null, dueDateLabel: 'Paid on Feb 25, 2018', amount: 958, vat: 652 },
    { id: '#0020', period: 'January 2018', issuedTo: 'Ethan', paymentMethod: 'Wire transfer', status: 'Invalid', issueDate: 'January 10, 2018', dueDate: 'On hold', amount: 985, vat: 548 },
    { id: '#0021', period: 'January 2018', issuedTo: 'Noah', paymentMethod: 'Paypal', status: 'Overdue', issueDate: 'January 10, 2018', dueDate: '3 days', amount: 645, vat: 598 },
    { id: '#0022', period: 'January 2018', issuedTo: 'Jayden', paymentMethod: 'Paypal', status: 'Canceled', issueDate: 'January 15, 2018', dueDate: '12 days', amount: 458, vat: 985 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Canceled': return 'bg-gray-100 text-gray-800';
      case 'Invalid': return 'bg-orange-100 text-orange-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'On hold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDueDateBadge = (dueDate: string | null, dueDateLabel?: string, status?: Invoice['status']) => {
    // Paid label (explicit)
    if (dueDateLabel?.toLowerCase().includes('paid')) {
      return <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs">{dueDateLabel}</span>;
    }

    // On hold
    if (dueDate === 'On hold' || status === 'On hold') {
      return <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">On hold</span>;
    }

    // Relative days (e.g. "6 days" or "3 days")
    if (dueDate?.includes('days')) {
      const match = dueDate.match(/(\d+)/);
      const days = match ? parseInt(match[1], 10) : null;
      if (days !== null) {
        if (status === 'Overdue') {
          return <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs">Overdue • {days} days</span>;
        }
        const colorClass = days <= 3 ? 'bg-red-500 text-white' : days <= 7 ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white';
        return <span className={`inline-block ${colorClass} px-3 py-1 rounded-full text-xs`}>Due in {days} days</span>;
      }
    }

    // Try parsing as an exact date string and format it (e.g. "2018-02-15")
    if (dueDate) {
      const parsed = Date.parse(dueDate);
      if (!isNaN(parsed)) {
        const d = new Date(parsed);
        const formatted = d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
        return <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">{formatted}</span>;
      }
    }

    // Fallback
    return <span className="text-sm text-gray-600">—</span>;
  };

  const stats = [
    { label: 'Invoice', value: '2,064', subtext: 'Total Invoice', color: 'bg-green-500' },
    { label: 'Re Generate Invoice', value: '1,738', subtext: 'Re Generate Invoice', color: 'bg-blue-500' },
    { label: 'Overdue Payment Invoice', value: '1100', subtext: 'Overdue Payment Invoice', color: 'bg-pink-500' },
    { label: 'Pending Invoice', value: '964', subtext: 'Pending', color: 'bg-yellow-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Invoice List</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>🏠</span>
            <span>Invoice</span>
            <span>-</span>
            <span>Invoice List</span>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              {/* Title and Export Options */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">Invoice List</h2>
                <p className="text-sm text-gray-500">Export Invoice List to Copy, CSV, Excel, PDF & Print</p>
              </div>

              {/* Action Buttons and Search */}
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium text-gray-700">
                    Copy
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium text-gray-700">
                    CSV
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium text-gray-700">
                    Excel
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium text-gray-700">
                    PDF
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium text-gray-700">
                    Print
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">#</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Period</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Issued to</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Issue date</th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600">Due date</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-gray-600">Amount</th>
                      <th className="text-center py-3 px-4 text-xs font-semibold text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice, ) => (
                      <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm text-blue-600 font-medium">{invoice.id}</td>
                        <td className="py-4 px-4 text-sm text-gray-700">{invoice.period}</td>
                        <td className="py-4 px-4">
                          <div className="text-sm text-blue-600">{invoice.issuedTo}</div>
                          <div className="text-xs text-gray-500">Payment method: {invoice.paymentMethod}</div>
                        </td>
                        <td className="py-4 px-4">
                          <select className={`px-3 py-1 rounded text-xs font-medium ${getStatusColor(invoice.status)} border-none focus:outline-none`}>
                            <option>{invoice.status}</option>
                          </select>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-700">{invoice.issueDate}</td>
                        <td className="py-4 px-4">
                          {getDueDateBadge(invoice.dueDate, invoice.dueDateLabel, invoice.status)}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="text-sm font-semibold text-gray-800">${invoice.amount}</div>
                          <div className="text-xs text-gray-500">VAT ${invoice.vat}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex justify-center gap-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Eye size={16} />
                            </button>
                            <button className="text-blue-600 hover:text-blue-800">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Showing 1 to 10 of 13 entries
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm text-gray-700">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm text-gray-700">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm text-gray-700">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="w-80 space-y-4">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.color} rounded-lg p-6 text-white relative overflow-hidden`}>
                {/* top-right icon */}
                <div className="absolute top-3 right-3">
                  <MoreVertical className="w-4 h-4 opacity-90" />
                </div>
                <div className="text-sm opacity-90 mb-2">{stat.label}</div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition">
        <span className="text-2xl">💬</span>
      </button>
    </div>
  );
};

export default InvoiceList;