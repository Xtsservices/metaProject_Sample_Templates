import { useState } from 'react';
import { Users, Package, Clock, XCircle, Eye, Download, Share2, TrendingUp, TrendingDown } from 'lucide-react';

const Dashboard2 = () => {
  // Stats data
  const stats = [
    { 
      icon: <Users className="w-6 h-6 text-blue-500" />, 
      label: 'Total Customers', 
      value: '50,000', 
      change: '+2.5% Since Last Week', 
      positive: true,
      bgColor: 'bg-blue-50'
    },
    { 
      icon: <Package className="w-6 h-6 text-green-500" />, 
      label: 'Completed Orders', 
      value: '20,000', 
      change: '+2.5% Since Last Week', 
      positive: true,
      bgColor: 'bg-green-50'
    },
    { 
      icon: <Clock className="w-6 h-6 text-yellow-500" />, 
      label: 'Pending Orders', 
      value: '500', 
      change: '+3% Since Last Week', 
      positive: true,
      bgColor: 'bg-yellow-50'
    },
    { 
      icon: <XCircle className="w-6 h-6 text-pink-500" />, 
      label: 'Canceled Orders', 
      value: '1,500', 
      change: '+2.5% Since Last Week', 
      positive: true,
      bgColor: 'bg-pink-50'
    },
  ];

  // Rate cards data
  const rateCards = [
    { label: 'Delivery Rate', value: '84%', change: '+3.5% Since Last Week', color: 'text-blue-500', strokeColor: '#3b82f6', positive: true },
    { label: 'Return Rate', value: '40%', change: '+3.5% Since Last Week', color: 'text-orange-500', strokeColor: '#f97316', positive: false },
    { label: 'Cancel Rate', value: '20%', change: '+3.5% Since Last Week', color: 'text-pink-500', strokeColor: '#ec4899', positive: false },
  ];

  // Sales data
  const salesData = [
    { year: '2018', value: 800, color: 'bg-cyan-400' },
    { year: '2019', value: 250, color: 'bg-blue-400' },
    { year: '2020', value: 350, color: 'bg-indigo-500' },
    { year: '2021', value: 200, color: 'bg-purple-500' },
    { year: '2022', value: 300, color: 'bg-fuchsia-500' },
    { year: '2023', value: 450, color: 'bg-pink-500' },
    { year: '2024', value: 850, color: 'bg-pink-400' },
  ];

  // User reviews
  const reviews = [
    { name: 'Fredliny Aloue', avatar: '👤', rating: 4, text: 'Review details lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { name: 'Ulfeed Doupals', avatar: '👤', rating: 5, text: 'Review details lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { name: 'Rarite Malorcean', avatar: '👤', rating: 4, text: 'Review details lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
  ];

  // Top selling products
  const topProducts = [
    { name: 'Fredliny Aloue', image: '🏠', price: '$250' },
    { name: 'Ulfeed Doupals', image: '🏠', price: '$256' },
    { name: 'Rarite Malorcean', image: '🏠', price: '$124' },
    { name: 'Tim Ford', image: '🏠', price: '$358' },
    { name: 'Orlence', image: '🏠', price: '$365' },
  ];

  // transactions moved to state so status can be changed per row
  const initialTransactions = [
    { id: '#ORD121', customer: 'John', date: '27/08/25', product: 'NuSkin-I-(0)', price: '$50', transId: '#71121', status: 'Completed' },
    { id: '#ORD122', customer: 'Emily', date: '26/08/25', product: 'ThincoId-(6)', price: '$20', transId: '#71122', status: 'Pending' },
    { id: '#ORD123', customer: 'Michael', date: '26/08/25', product: 'CP-0004-(4)', price: '$10', transId: '#71123', status: 'Pending' },
    { id: '#ORD124', customer: 'Brown', date: '26/08/25', product: 'MidiGhana-(4)', price: '$20', transId: '#71124', status: 'Completed' },
    { id: '#ORD125', customer: 'Lisa', date: '25/08/25', product: 'INV-251-(4)', price: '$5', transId: '#71125', status: 'Cancelled' },
  ];
  const [transactions, setTransactions] = useState(initialTransactions);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const maxSales = Math.max(...salesData.map(d => d.value));

  const CircularProgress = ({ value, color }: { value: string, color: string }) => {
    const percentage = parseInt(value);
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke={color}
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-700 dark:text-gray-200">{value}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-white">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
              <p className={`text-xs flex items-center gap-1 ${stat.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {stat.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* User Reviews */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-white">
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">User Reviews</h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">All Reviews +</button>
        </div>
        <div className="space-y-4">
            {reviews.map((review, index) => (
            <div key={index} className="pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0">
                <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                    {review.avatar}
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{review.name}</h4>
                    <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                    ))}
                    </div>
                </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{review.text}</p>
            </div>
            ))}
        </div>
        </div>

        {/* Rate Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {rateCards.map((card, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-white">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{card.label}</h3>
              <div className="flex justify-center mb-4">
                <CircularProgress value={card.value} color={card.strokeColor} />
              </div>
              <p className={`text-xs flex items-center justify-center gap-1 ${card.positive ? 'text-green-600' : 'text-red-600'}`}>
                {card.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {card.change}
              </p>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-white">
            <div className="flex items-center justify-between mb-6">
            <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Total Revenue</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$1,05,455.86</p>
            </div>
            <select className="text-sm border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700">
                <option>Today</option>
            </select>
            </div>
            <div className="h-48 flex items-end">
            <svg viewBox="0 0 400 150" className="w-full h-full">
                <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
                </linearGradient>
                </defs>
                <path
                d="M 0,100 Q 50,80 100,70 T 200,50 T 300,40 T 400,30 L 400,150 L 0,150 Z"
                fill="url(#gradient)"
                />
                <path
                d="M 0,100 Q 50,80 100,70 T 200,50 T 300,40 T 400,30"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="2"
                />
            </svg>
            </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Analytics */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-96 border border-gray-200 dark:border-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sales Analytics</h3>
              <select className="text-sm border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700">
                <option>Year</option>
              </select>
            </div>
            <div className="flex items-end justify-between h-64 gap-4">
              {salesData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="relative w-full flex items-end justify-center" style={{ height: '200px' }}>
                    <div
                      className={`w-full ${data.color} rounded-t-lg transition-all hover:opacity-80`}
                      style={{ height: `${(data.value / maxSales) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">{data.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Selling Products */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-96 border border-gray-200 dark:border-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Top Selling Products</h3>
            </div>
            <div className="space-y-3 h-64 overflow-y-auto">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                      {product.image}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{product.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transaction Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-white">
            <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Transaction Overview</h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">Export ↗</button>
            </div>
            <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-300">Order ID</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-300">Customer Name</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-300">Order Date</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-300">Product Ordered</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-300">Total Price</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-300">Transaction ID</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-300">Order Status</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-300">Action</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((trans) => (
                    <tr key={trans.id} className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">{trans.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">{trans.customer}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{trans.date}</td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">{trans.product}</td>
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">{trans.price}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{trans.transId}</td>
                    <td className="py-3 px-4">
                        <select
                          value={trans.status}
                          onChange={(e) => {
                            const newStatus = e.target.value;
                            setTransactions(prev => prev.map(t => t.id === trans.id ? { ...t, status: newStatus } : t));
                          }}
                          className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(trans.status)} border-none focus:outline-none`}
                        >
                          <option value="Completed">Completed</option>
                          <option value="Pending">Pending</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                    </td>
                    <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                            <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                            <Download className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-600 dark:text-gray-300">
            <span>Showing 1 to 5 of 11 entries</span>
            <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">...</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;