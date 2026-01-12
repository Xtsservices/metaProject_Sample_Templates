import React, { useState } from 'react';
import { TrendingUp, Users, ShoppingCart, Eye, FileText, Share2, MoreVertical } from 'lucide-react';

const PharmacyDashboard = () => {
  const salesData = [
    { month: 'Jan', value: 700, color: 'bg-cyan-400' },
    { month: 'Feb', value: 850, color: 'bg-blue-400' },
    { month: 'Mar', value: 600, color: 'bg-indigo-500' },
    { month: 'Apr', value: 500, color: 'bg-purple-600' },
    { month: 'May', value: 320, color: 'bg-purple-500' },
    { month: 'Jun', value: 750, color: 'bg-fuchsia-500' },
    { month: 'Jul', value: 220, color: 'bg-pink-400' },
    { month: 'Aug', value: 380, color: 'bg-pink-500' },
    { month: 'Sep', value: 180, color: 'bg-rose-400' },
    { month: 'Oct', value: 300, color: 'bg-red-400' },
    { month: 'Nov', value: 500, color: 'bg-orange-400' },
    { month: 'Dec', value: 820, color: 'bg-amber-400' },
  ];

  const topSelling = [
    { name: 'Ator..', value: 4800, color: 'bg-green-500' },
    { name: 'Omep..', value: 3600, color: 'bg-lime-400' },
    { name: 'Metfo..', value: 2600, color: 'bg-yellow-400' },
    { name: 'Phoebe', value: 1800, color: 'bg-amber-300' },
  ];

  // orders moved to state so status can be changed per row
  const initialOrders = [
    { id: '#ORD121', medicine: 'Metformin', price: '$10.50', status: 'Delivered' },
    { id: '#ORD122', medicine: 'Omeprazole', price: '$15.05', status: 'Delivered' },
    { id: '#ORD123', medicine: 'Atorvastatin', price: '$13.01', status: 'Pending' },
  ];
  const [orders, setOrders] = useState(initialOrders);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const [statusFilter, setStatusFilter] = useState<'All' | 'Delivered' | 'Pending'>('All');
  const filteredOrders = orders.filter(o => statusFilter === 'All' ? true : o.status === statusFilter);

  const maxSales = Math.max(...salesData.map(d => d.value));

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-none space-y-4 sm:space-y-6">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Total Invites */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-white/20 px-2 py-1 rounded font-medium">+10%</span>
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
            <p className="text-sm opacity-90 mb-1">Total Invites</p>
            <h2 className="text-4xl font-bold mb-1">$1,200</h2>
            <p className="text-xs opacity-75">Since Last Week</p>
          </div>

          {/* Total Customers */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm relative">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded font-medium">-8%</span>
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Customers</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-1">2,102</h2>
            <p className="text-xs text-gray-500">Since Last Week</p>
          </div>

          {/* Total Orders */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm relative sm:col-span-2 xl:col-span-1">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded font-medium">+10%</span>
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Orders</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-1">2,458</h2>
            <p className="text-xs text-gray-500">Since Last Week</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-6">
          {/* Sales Analytics (2fr) */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Sales Analytics</h3>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 w-full sm:w-auto">
                <option>This Month</option>
              </select>
            </div>
            <div className="flex items-end justify-between h-48 sm:h-64 gap-1 sm:gap-2">
              {salesData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="relative w-full flex items-end justify-center" style={{ height: '200px' }}>
                    <div
                      className={`w-full ${data.color} rounded-t-2xl shadow-sm transition-all duration-300 group hover:opacity-90`}
                      style={{ height: `${(data.value / maxSales) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (1fr) */}
          <div className="space-y-4 sm:space-y-6">
            {/* Banner */}
            <div className="bg-gradient-to-r from-gray-400 to-gray-300 rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden h-40 sm:h-48">
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Discover How to Maximize Your Pharmacy's Efficiency.</h3>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2">
                  Learn More
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Top Selling */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Top Selling</h3>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 w-full sm:w-auto">
                  <option>This Month</option>
                </select>
              </div>
              <div className="flex items-end justify-between h-40 sm:h-48 gap-2 sm:gap-4">
                {topSelling.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full flex items-end justify-center" style={{ height: '160px' }}>
                      <div
                        className={`w-full ${item.color} rounded-t-full transition-all hover:opacity-80`}
                        style={{ height: `${(item.value / 5000) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Latest Orders */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Latest Orders</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium self-start sm:self-auto">View All</button>
          </div>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-full px-4 sm:px-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Order Id</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Medicine Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Price</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-900">{order.id}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{order.medicine}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{order.price}</td>
                      <td className="py-4 px-4">
                        <select
                          value={order.status}
                          onChange={(e) => {
                            const newStatus = e.target.value;
                            setOrders(prev => prev.map(o => o.id === order.id ? { ...o, status: newStatus } : o));
                          }}
                          className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(order.status)} border-none focus:outline-none`}
                        >
                          <option value="Delivered">Delivered</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <FileText className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Payment Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Completed Payment */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">Completed Payment</span>
              </div>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mb-2">Revenue: $25,000</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-1">200</h2>
            <p className="text-xs text-gray-500">Since Last Week</p>
          </div>

          {/* Pending Payments */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">!</div>
                </div>
                <span className="text-sm font-medium text-gray-900">Pending Payments</span>
              </div>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mb-2">Revenue: $10,000</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-1">40</h2>
            <p className="text-xs text-gray-500">Since Last Week</p>
          </div>

          {/* Failed Payments */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">✕</div>
                </div>
                <span className="text-sm font-medium text-gray-900">Failed Payments</span>
              </div>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 mb-2">Revenue: $5,000</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-1">5</h2>
            <p className="text-xs text-gray-500">Since Last Week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;