import React, { useState } from 'react';
import { TrendingUp, Users, Package, Clock, XCircle, Eye, Edit, Trash2 } from 'lucide-react';

const Dashboard3 = () => {
  // Sales summary cards
  const salesCards = [
    { label: 'In-Store Sales', value: '$5,128.90', change: '+27%', bgColor: 'bg-pink-200', textColor: 'text-pink-900' },
    { label: 'Online Sales', value: '$2,154.10', change: '+23%', bgColor: 'bg-teal-200', textColor: 'text-teal-900' },
    { label: 'Total Sales', value: '$7,450.5', change: '+19%', bgColor: 'bg-green-200', textColor: 'text-green-900' },
  ];


  // Monthly sales data
  const monthlySales = [
    { month: 'Jan', value: 70 },
    { month: 'Feb', value: 75 },
    { month: 'Mar', value: 85 },
    { month: 'Apr', value: 82 },
    { month: 'May', value: 78 },
    { month: 'Jun', value: 83 },
    { month: 'Jul', value: 80 },
    { month: 'Aug', value: 88 },
    { month: 'Sep', value: 79 },
    { month: 'Oct', value: 65 },
    { month: 'Nov', value: 90 },
    { month: 'Dec', value: 73 },
  ];

  // top products moved to state so status can be changed per row
  const initialProducts = [
    { id: '#ORD121', name: 'NubiSCin', quantity: '120 Units', price: '$2.08', status: 'In Stock' },
    { id: '#ORD122', name: 'Midicannie', quantity: '50 Units', price: '$6', status: 'Out Of stock' },
    { id: '#ORD123', name: 'PrescidIF', quantity: '38 Units', price: '$10', status: 'Limited' },
    { id: '#ORD124', name: 'CP-0004', quantity: '80 Units', price: '$2', status: 'In Stock' },
    { id: '#ORD125', name: 'INV-231', quantity: '18 Units', price: '$8', status: 'In Stock' },
  ];
  const [products, setProducts] = useState(initialProducts);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-700';
      case 'Out Of stock': return 'bg-red-100 text-red-700';
      case 'Limited': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Bottom stats
  const bottomStats = [
    { icon: <Users className="w-6 h-6 text-blue-500" />, label: 'Total Customers', value: '50,000', change: '+2.5% Since Last Week', bgColor: 'bg-blue-50' },
    { icon: <Package className="w-6 h-6 text-green-500" />, label: 'Total Orders', value: '20,000', change: '+1% Since Last Week', bgColor: 'bg-green-50' },
    { icon: <Clock className="w-6 h-6 text-yellow-500" />, label: 'Pending Orders', value: '500', change: '+8% Since Last Week', bgColor: 'bg-yellow-50' },
    { icon: <XCircle className="w-6 h-6 text-pink-500" />, label: 'Canceled Orders', value: '1,500', change: '+2% Since Last Week', bgColor: 'bg-pink-50' },
  ];

  // Top products list
  const topProducts = [
    { name: 'Fredliny Aloue', units: '100 Units', image: '🏠', price: '$356' },
    { name: 'Ulfeed Doupals', units: '100 Units', image: '🏠', price: '$250' },
    { name: 'Rarite Malorcean', units: '100 Units', image: '🏠', price: '$124' },
    { name: 'Tim Ford', units: '100 Units', image: '🏠', price: '$368' },
    { name: 'Orlence', units: '100 Units', image: '🏠', price: '$365' },
  ];

  const maxValue = Math.max(...monthlySales.map(m => m.value));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Top Section - Total Sale and Order */}
        <div>
          {/* Total Sale */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm text-gray-600">Total Sale</h3>
              <select className="text-xs border border-gray-200 rounded px-2 py-1">
                <option>Last 7 Days</option>
              </select>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">$1,950.86</h2>
            <p className="text-xs text-gray-500 mb-6">Total year sales breakdown by $723.43 from last month</p>

            {/* Sales Cards */}
            <div className="grid grid-cols-3 gap-4">
              {salesCards.map((card, index) => (
                <div key={index} className={`${card.bgColor} rounded-lg p-4`}>
                  <p className={`text-xs ${card.textColor} mb-2`}>{card.label}</p>
                  <h4 className={`text-xl font-bold ${card.textColor} mb-1`}>{card.value}</h4>
                  <span className={`text-xs ${card.textColor} font-medium`}>{card.change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Total Order with Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm relative">
            <div className="absolute top-4 right-4">
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </div>
            <h3 className="text-sm text-gray-600 mb-2">Total Order</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <h2 className="text-3xl font-bold text-gray-900">$564</h2>
              <span className="text-xs text-green-600">+3.5%</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Total order have increase by 21% from last month</p>
            
            {/* Area Chart */}
            <div className="h-32">
              <svg viewBox="0 0 400 100" className="w-full h-full">
                <defs>
                  <linearGradient id="orderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,60 Q 50,45 100,40 Q 150,35 200,30 Q 250,40 300,35 Q 350,45 400,40 L 400,100 L 0,100 Z"
                  fill="url(#orderGradient)"
                />
                <path
                  d="M 0,60 Q 50,45 100,40 Q 150,35 200,30 Q 250,40 300,35 Q 350,45 400,40"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue By Category */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Revenue By Category</h3>
              <select className="text-xs border border-gray-200 rounded px-2 py-1">
                <option>Monthly</option>
              </select>
            </div>
            
            {/* Donut Chart */}
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#fcd34d"
                    strokeWidth="20"
                    strokeDasharray="75.4 251.2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#5eead4"
                    strokeWidth="20"
                    strokeDasharray="75.4 251.2"
                    strokeDashoffset="-75.4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#fbcfe8"
                    strokeWidth="20"
                    strokeDasharray="100.5 251.2"
                    strokeDashoffset="-150.8"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">$850</span>
                  <span className="text-xs text-gray-500">Revenue</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
                <span className="text-sm text-gray-700">Pet Food</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
                <span className="text-sm text-gray-700">Wellness</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
                <span className="text-sm text-gray-700">Accessories</span>
              </div>
            </div>
          </div>

          {/* Monthly Sales Performance */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Monthly Sales Performance</h3>
              <select className="text-xs border border-gray-200 rounded px-2 py-1">
                <option>This Year</option>
              </select>
            </div>
            
            <div className="flex items-end justify-between h-48 gap-2">
              {monthlySales.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="relative w-full flex items-end justify-center" style={{ height: '160px' }}>
                    <div
                      className="w-full bg-yellow-300 rounded-t-full transition-all hover:opacity-80"
                      style={{ height: `${(data.value / maxValue) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Top Selling Products</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Product ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Product Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Quantity</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Price</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-900">{product.id}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{product.name}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{product.quantity}</td>
                      <td className="py-4 px-4 text-sm text-gray-900">{product.price}</td>
                      <td className="py-4 px-4">
                        <select
                          value={product.status}
                          onChange={(e) => {
                            const newStatus = e.target.value;
                            setProducts(prev => prev.map(p => p.id === product.id ? { ...p, status: newStatus } : p));
                          }}
                          className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(product.status)} border-none focus:outline-none`}
                        >
                          <option value="In Stock">In Stock</option>
                          <option value="Out Of stock">Out Of stock</option>
                          <option value="Limited">Limited</option>
                        </select>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button>
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button>
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button>
                            <Trash2 className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
              <span>Showing 1 to 5 of 5 entries</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
              </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Bottom Stats */}     
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
          {bottomStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </p>
            </div>
          ))}
        </div>

          {/* Top Products Sidebar */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Top Products</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                      {product.image}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.units}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{product.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard3;