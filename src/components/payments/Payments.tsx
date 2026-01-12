import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle, MoreVertical, Eye, Trash2, Share2 } from 'lucide-react';

interface PaymentStat {
  title: string;
  revenue: string;
  count: number;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  bgColor: string;
}

interface Payment {
  orderId: string;
  customerName: string;
  orderDate: string;
  productOrdered: string;
  totalPrice: number;
  transactionId: string;
  orderStatus: 'completed' | 'in-progress' | 'pending' | 'cancelled';
}

const Payments: React.FC = () => {
  const stats: PaymentStat[] = [
    {
      title: 'Completed Payment',
      revenue: 'Revenue: $25,000',
      count: 200,
      subtitle: 'Since Last Week',
      icon: <CheckCircle className="w-6 h-6" />,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-white'
    },
    {
      title: 'Pending Payments',
      revenue: 'Revenue: $10,000',
      count: 40,
      subtitle: 'Since Last Week',
      icon: <AlertTriangle className="w-6 h-6" />,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      bgColor: 'bg-white'
    },
    {
      title: 'Failed Payments',
      revenue: 'Revenue: $5,000',
      count: 5,
      subtitle: 'Since Last Week',
      icon: <XCircle className="w-6 h-6" />,
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      bgColor: 'bg-white'
    }
  ];

  const initialPayments: Payment[] = [
    { orderId: '#ORD121', customerName: 'Jhon', orderDate: '27/08/25', productOrdered: 'Nullacin (10)', totalPrice: 50, transactionId: '#TX121', orderStatus: 'completed' },
    { orderId: '#ORD122', customerName: 'Emily', orderDate: '26/08/25', productOrdered: 'Theralief (4)', totalPrice: 20, transactionId: '#TX122', orderStatus: 'in-progress' },
    { orderId: '#ORD123', customerName: 'Michael', orderDate: '26/08/25', productOrdered: 'CP-0004 (4)', totalPrice: 10, transactionId: '#TX123', orderStatus: 'pending' },
    { orderId: '#ORD124', customerName: 'Brown', orderDate: '26/08/25', productOrdered: 'Medicanox (4)', totalPrice: 20, transactionId: '#TX124', orderStatus: 'completed' },
    { orderId: '#ORD125', customerName: 'Lisa', orderDate: '25/08/25', productOrdered: 'INV-251 (4)', totalPrice: 8, transactionId: '#TX125', orderStatus: 'cancelled' },
    { orderId: '#ORD126', customerName: 'Paul', orderDate: '24/08/25', productOrdered: 'Simupril (4)', totalPrice: 32, transactionId: '#TX126', orderStatus: 'completed' },
    { orderId: '#ORD127', customerName: 'Martinez', orderDate: '23/08/25', productOrdered: 'CP-0004 (4)', totalPrice: 12, transactionId: '#TX127', orderStatus: 'completed' },
    { orderId: '#ORD128', customerName: 'Wiliams', orderDate: '23/08/25', productOrdered: 'Simupril (5)', totalPrice: 5, transactionId: '#TX128', orderStatus: 'completed' },
    { orderId: '#ORD129', customerName: 'Moore', orderDate: '22/08/25', productOrdered: 'Theralief (14)', totalPrice: 56, transactionId: '#TX129', orderStatus: 'completed' },
    { orderId: '#ORD130', customerName: 'Jhon', orderDate: '21/08/25', productOrdered: 'Simupril (9)', totalPrice: 10, transactionId: '#TX130', orderStatus: 'completed' }
  ];
  const [payments, setPayments] = useState<Payment[]>(initialPayments);

  const getOrderStatusStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      case 'in-progress':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'pending':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'cancelled':
        return 'bg-rose-100 text-rose-700 border border-rose-200';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        
        {/* Payment Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`${stat.iconBg} ${stat.iconColor} p-3 rounded-xl`}>
                  {stat.icon}
                </div>
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-1 mb-3">
                <h3 className="text-sm font-semibold text-slate-900">
                  {stat.title}
                </h3>
                <p className="text-xs text-slate-600">
                  {stat.revenue}
                </p>
              </div>
              
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-bold text-slate-900">
                  {stat.count}
                </span>
                <span className="text-xs text-slate-500">
                  {stat.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Lists */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Payment Lists</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">Show</span>
                  <select className="px-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <span className="text-sm text-slate-600">entries</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-3 pr-10 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Order ID
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Customer Name
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Order Date
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Product Ordered
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Total Price
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Transaction ID
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Order Status
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Action
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {payments.map((payment, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {payment.orderId}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {payment.customerName}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {payment.orderDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {payment.productOrdered}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      ${payment.totalPrice}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {payment.transactionId}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={payment.orderStatus}
                        onChange={(e) => {
                          const newStatus = e.target.value as Payment['orderStatus'];
                          setPayments(prev => prev.map(p => p.orderId === payment.orderId ? { ...p, orderStatus: newStatus } : p));
                        }}
                        className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold ${getOrderStatusStyle(payment.orderStatus)} border-none focus:outline-none`}
                      >
                        <option value="completed">Completed</option>
                        <option value="in-progress">In progress</option>
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              Showing 1 to 10 of 10 entries
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
                1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                2
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                3
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;