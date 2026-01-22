import React, { useState } from 'react';
import { TrendingUp, TrendingDown, MoreVertical, Eye, Trash2, Share2 } from 'lucide-react';

interface StatCard {
  title: string;
  subtitle: string;
  value: number;
  trend?: number;
  revenue: string;
  bgColor: string;
  textColor: string;
  trendColor?: string;
}

interface Order {
  id: string;
  customerName: string;
  orderDate: string;
  productOrdered: string;
  totalPrice: number;
  paymentStatus: 'paid' | 'pending' | 'failed';
  orderStatus: 'completed' | 'in-progress' | 'pending' | 'cancelled';
}

const Orders: React.FC = () => {
  const stats: StatCard[] = [
    {
      title: 'Total Orders',
      subtitle: 'Since Last Week',
      value: 2200,
      trend: 3.5,
      revenue: 'Revenue Generated: $10,500',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      textColor: 'text-white',
      trendColor: 'bg-white/20 text-white'
    },
    {
      title: 'Completed Orders',
      subtitle: 'Since Last Week',
      value: 1025,
      trend: 4.1,
      revenue: 'Revenue Generated: $6,500',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      trendColor: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Pending Orders',
      subtitle: 'Since Last Week',
      value: 225,
      trend: 3,
      revenue: 'Approx Revenue: $1,500',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      trendColor: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Cancelled Orders',
      subtitle: 'Since Last Week',
      value: 10,
      trend: -2.2,
      revenue: 'Lost Revenue $800',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      trendColor: 'bg-rose-50 text-rose-600'
    }
  ];

  const initialOrders: Order[] = [
    { id: '#ORD121', customerName: 'Jhon', orderDate: '27/08/25', productOrdered: 'Nullacin (10)', totalPrice: 50, paymentStatus: 'paid', orderStatus: 'completed' },
    { id: '#ORD122', customerName: 'Emily', orderDate: '26/08/25', productOrdered: 'Theralief (4)', totalPrice: 20, paymentStatus: 'pending', orderStatus: 'in-progress' },
    { id: '#ORD123', customerName: 'Michael', orderDate: '26/08/25', productOrdered: 'CP-0004 (4)', totalPrice: 10, paymentStatus: 'paid', orderStatus: 'pending' },
    { id: '#ORD124', customerName: 'Brown', orderDate: '26/08/25', productOrdered: 'Medicanox (4)', totalPrice: 20, paymentStatus: 'paid', orderStatus: 'completed' },
    { id: '#ORD125', customerName: 'Lisa', orderDate: '25/08/25', productOrdered: 'INV-251 (4)', totalPrice: 8, paymentStatus: 'failed', orderStatus: 'cancelled' },
    { id: '#ORD126', customerName: 'Paul', orderDate: '24/08/25', productOrdered: 'Simupril (4)', totalPrice: 32, paymentStatus: 'paid', orderStatus: 'completed' },
    { id: '#ORD127', customerName: 'Martinez', orderDate: '23/08/25', productOrdered: 'CP-0004 (4)', totalPrice: 12, paymentStatus: 'pending', orderStatus: 'completed' },
    { id: '#ORD128', customerName: 'Wiliams', orderDate: '23/08/25', productOrdered: 'Simupril (5)', totalPrice: 5, paymentStatus: 'paid', orderStatus: 'in-progress' },
    { id: '#ORD129', customerName: 'Moore', orderDate: '22/08/25', productOrdered: 'Theralief (14)', totalPrice: 56, paymentStatus: 'paid', orderStatus: 'completed' },
    { id: '#ORD130', customerName: 'Jhon', orderDate: '21/08/25', productOrdered: 'Simupril (9)', totalPrice: 10, paymentStatus: 'paid', orderStatus: 'in-progress' }
  ];
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const getPaymentStatusStyle = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
      case 'pending':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'failed':
        return 'bg-rose-100 text-rose-700 border border-rose-200';
      default:
        return '';
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} ${index === 0 ? 'dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700' : 'dark:bg-gray-800'} rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                index === 0 ? 'border border-blue-300 dark:border-white' : 'border border-slate-200 dark:border-white'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className={`text-sm font-semibold mb-1 ${
                    index === 0 ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}>
                    {stat.title}
                  </h3>
                  <p className={`text-xs ${
                    index === 0 ? 'text-blue-100 dark:text-blue-200' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {stat.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                    <MoreVertical className="w-4 h-4" />
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-baseline gap-3">
                  <span className={`text-4xl font-bold ${index === 0 ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {stat.value.toLocaleString()}
                  </span>
                  {stat.trend && (
                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold ${stat.trendColor}`}>
                      {stat.trend > 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      <span>{stat.trend > 0 ? '+' : ''}{stat.trend}%</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className={`text-xs font-medium ${
                index === 0 ? 'text-blue-100 dark:text-blue-200' : 'text-slate-600 dark:text-slate-300'
              }`}>
                {stat.revenue}
              </p>
            </div>
          ))}
        </div>

        {/* Order List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-white overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Order List</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-300">Show</span>
                  <select className="px-3 py-1.5 text-sm border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-slate-700 dark:text-slate-300">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                  <span className="text-sm text-slate-600 dark:text-slate-300">entries</span>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-3 pr-10 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 bg-white dark:bg-gray-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 dark:bg-gray-700 border-b border-slate-200 dark:border-slate-600">
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Order ID
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Customer Name
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Order Date
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Product Ordered
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Total Price
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Payment Status
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Order Status
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Action
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      {order.customerName}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      {order.orderDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      {order.productOrdered}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      ${order.totalPrice}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.paymentStatus}
                        onChange={(e) => {
                          const newStatus = e.target.value as Order['paymentStatus'];
                          setOrders(prev => prev.map(o => o.id === order.id ? { ...o, paymentStatus: newStatus } : o));
                        }}
                        className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold ${getPaymentStatusStyle(order.paymentStatus)} border-none focus:outline-none`}
                      >
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="failed">Failed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={order.orderStatus}
                        onChange={(e) => {
                          const newStatus = e.target.value as Order['orderStatus'];
                          setOrders(prev => prev.map(o => o.id === order.id ? { ...o, orderStatus: newStatus } : o));
                        }}
                        className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold ${getOrderStatusStyle(order.orderStatus)} border-none focus:outline-none`}
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

          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div className="text-sm text-slate-600 dark:text-slate-400">
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

export default Orders;