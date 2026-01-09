import React from 'react';
import { TrendingUp, TrendingDown, MoreVertical, Eye, Copy, Share2 } from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  trend: number;
  bgColor: string;
  textColor: string;
}

interface RevenueData {
  month: string;
  value: number;
  color: string;
}

interface OrderTimeData {
  day: string;
  times: { hour: string; value: number; color: string }[];
}

interface Order {
  id: string;
  productName: string;
  totalPrice: number;
  paymentStatus: 'paid' | 'pending' | 'failed';
  orderStatus: 'completed' | 'in-progress' | 'pending' | 'cancelled';
}

interface TopProduct {
  name: string;
  sold: number;
  revenue: number;
  image: string;
}

const Sales: React.FC = () => {
  const stats: StatCard[] = [
    {
      title: 'Antibiotics',
      value: '$122,856',
      trend: 3.2,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      textColor: 'text-white'
    },
    {
      title: 'Total Profit',
      value: '$12,025',
      trend: -0.8,
      bgColor: 'bg-white',
      textColor: 'text-slate-900'
    },
    {
      title: 'Total Cost',
      value: '$35,235',
      trend: 10,
      bgColor: 'bg-white',
      textColor: 'text-slate-900'
    },
    {
      title: 'Average Order Value',
      value: '$85.05',
      trend: -2,
      bgColor: 'bg-white',
      textColor: 'text-slate-900'
    }
  ];

  const revenueData: RevenueData[] = [
    { month: 'Jan', value: 680, color: 'bg-cyan-400' },
    { month: 'Feb', value: 820, color: 'bg-blue-500' },
    { month: 'Mar', value: 600, color: 'bg-indigo-500' },
    { month: 'Apr', value: 480, color: 'bg-purple-500' },
    { month: 'May', value: 320, color: 'bg-purple-400' },
    { month: 'Jun', value: 720, color: 'bg-fuchsia-500' },
    { month: 'July', value: 180, color: 'bg-pink-400' },
    { month: 'Aug', value: 340, color: 'bg-pink-500' },
    { month: 'Sep', value: 160, color: 'bg-rose-400' },
    { month: 'Oct', value: 280, color: 'bg-red-500' },
    { month: 'Nov', value: 460, color: 'bg-orange-500' },
    { month: 'Dec', value: 880, color: 'bg-amber-400' }
  ];

  const orderTimeData: OrderTimeData[] = [
    { day: 'Sat', times: [
      { hour: '8 am', value: 200, color: 'bg-blue-200' },
      { hour: '10 am', value: 0, color: 'bg-blue-100' },
      { hour: '12 pm', value: 0, color: 'bg-blue-100' },
      { hour: '2 pm', value: 0, color: 'bg-blue-100' }
    ]},
    { day: 'Sun', times: [
      { hour: '8 am', value: 150, color: 'bg-blue-200' },
      { hour: '10 am', value: 0, color: 'bg-blue-100' },
      { hour: '12 pm', value: 180, color: 'bg-blue-300' },
      { hour: '2 pm', value: 0, color: 'bg-blue-100' }
    ]},
    { day: 'Mon', times: [
      { hour: '8 am', value: 0, color: 'bg-blue-100' },
      { hour: '10 am', value: 220, color: 'bg-blue-300' },
      { hour: '12 pm', value: 280, color: 'bg-blue-400' },
      { hour: '2 pm', value: 0, color: 'bg-blue-100' }
    ]},
    { day: 'Tue', times: [
      { hour: '8 am', value: 0, color: 'bg-blue-100' },
      { hour: '10 am', value: 0, color: 'bg-blue-100' },
      { hour: '12 pm', value: 320, color: 'bg-blue-500' },
      { hour: '2 pm', value: 420, color: 'bg-blue-400' }
    ]},
    { day: 'Wed', times: [
      { hour: '8 am', value: 0, color: 'bg-blue-100' },
      { hour: '10 am', value: 0, color: 'bg-blue-100' },
      { hour: '12 pm', value: 280, color: 'bg-blue-400' },
      { hour: '2 pm', value: 380, color: 'bg-blue-400' }
    ]},
    { day: 'Thu', times: [
      { hour: '8 am', value: 0, color: 'bg-blue-100' },
      { hour: '10 am', value: 0, color: 'bg-blue-100' },
      { hour: '12 pm', value: 0, color: 'bg-blue-100' },
      { hour: '2 pm', value: 450, color: 'bg-blue-300' }
    ]},
    { day: 'Fri', times: [
      { hour: '8 am', value: 120, color: 'bg-blue-200' },
      { hour: '10 am', value: 0, color: 'bg-blue-100' },
      { hour: '12 pm', value: 0, color: 'bg-blue-100' },
      { hour: '2 pm', value: 0, color: 'bg-blue-100' }
    ]}
  ];

  // times (y-axis) derived from the time slots (assumes consistent hours across days)
  const times: string[] = orderTimeData[0]?.times.map(t => t.hour) || [];

  const orders: Order[] = [
    { id: '#ORD121', productName: 'Nullacin (10)', totalPrice: 50, paymentStatus: 'paid', orderStatus: 'completed' },
    { id: '#ORD122', productName: 'Theralief (4)', totalPrice: 20, paymentStatus: 'pending', orderStatus: 'in-progress' },
    { id: '#ORD123', productName: 'CP-0004 (4)', totalPrice: 10, paymentStatus: 'paid', orderStatus: 'pending' },
    { id: '#ORD124', productName: 'Medicanox (4)', totalPrice: 20, paymentStatus: 'paid', orderStatus: 'completed' },
    { id: '#ORD125', productName: 'INV-251 (4)', totalPrice: 8, paymentStatus: 'failed', orderStatus: 'cancelled' }
  ];

  const topProducts: TopProduct[] = [
    { name: 'Freglinity Alooe', sold: 550, revenue: 3505, image: '🟤' },
    { name: 'Liftlect Dospelis', sold: 402, revenue: 2265, image: '🟣' },
    { name: 'Rarile Mebcream', sold: 256, revenue: 1154, image: '🟠' },
    { name: 'Sin Fard', sold: 162, revenue: 2568, image: '🟡' },
    { name: 'Orlarice', sold: 156, revenue: 2365, image: '🟢' }
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.value));

  const getPaymentStatusStyle = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'pending':
        return 'bg-amber-50 text-amber-600 border border-amber-200';
      case 'failed':
        return 'bg-rose-50 text-rose-600 border border-rose-200';
      default:
        return '';
    }
  };

  const getOrderStatusStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'in-progress':
        return 'bg-amber-50 text-amber-600 border border-amber-200';
      case 'pending':
        return 'bg-amber-50 text-amber-600 border border-amber-200';
      case 'cancelled':
        return 'bg-rose-50 text-rose-600 border border-rose-200';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                index === 0 ? 'border border-blue-300' : 'border border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-sm font-medium ${
                  index === 0 ? 'text-blue-50' : 'text-slate-600'
                }`}>
                  {stat.title}
                </h3>
                <div className="flex items-center gap-2">
                    <MoreVertical className="w-4 h-4" />
                </div>
              </div>
              
              <div className="mb-3">
                <span className={`text-3xl font-bold ${stat.textColor}`}>
                  {stat.value}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                  index === 0 
                    ? 'bg-white/20 text-white'
                    : stat.trend > 0 
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-rose-50 text-rose-600'
                }`}>
                  {stat.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  <span>{stat.trend > 0 ? '+' : ''}{stat.trend}%</span>
                </div>
                <span className={`text-xs ${
                  index === 0 ? 'text-blue-100' : 'text-slate-500'
                }`}>
                  Since Last Week
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section (2fr / 1fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          
          {/* Total Revenue Chart */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900">Total Revenue</h2>
              <select className="px-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700">
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
            
            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-400">
                <span>1,000</span>
                <span>800</span>
                <span>600</span>
                <span>400</span>
                <span>200</span>
                <span>0</span>
              </div>
              
              {/* Chart area */}
              <div className="ml-12 h-full flex items-end justify-between gap-3 border-b border-l border-slate-200 pb-8 pl-4">
                {revenueData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2 group relative">
                    <div className="w-full relative">
                      {/* Highlight latest / peak bar with a compact tooltip */}
                      {index === revenueData.length - 1 && (
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-medium shadow-lg">
                          {data.value}
                        </div>
                      )}
                      <div 
                        className={`w-full ${data.color} rounded-t-2xl transition-all duration-300 group-hover:opacity-95`}
                        style={{ height: `${(data.value / maxRevenue) * 180}px`, boxShadow: '0 6px 14px rgba(15,23,42,0.06)' }}
                      />
                      {/* subtle top glow */}
                      <div className="absolute -top-2 left-0 right-0 h-2 rounded-t-2xl pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.35), transparent)' }} />
                    </div>
                    <span className="text-xs text-slate-600 font-medium">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          {/* Orders By Time Heatmap */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900">Orders By Time</h2>
              <select className="px-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            
            <div className="space-y-3">
              {/* Legend */}
              <div className="flex items-center justify-end gap-4 mb-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded"></div>
                    <span>Low</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="w-4 h-4 bg-blue-300 rounded"></div>
                    <span>Medium</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span>High</span>
                  </div>
                </div>
              </div>
 
               {/* Days header (x-axis) */}
               <div className="flex items-center mb-2">
                 <div className="w-12" />{/* spacer for time labels column */}
                 <div
                   className="flex-1 grid gap-2"
                   style={{ gridTemplateColumns: `repeat(${orderTimeData.length}, minmax(0, 1fr))` }}
                 >
                   {orderTimeData.map((day) => (
                     <div key={day.day} className="text-xs text-center text-slate-600 font-medium">
                       {day.day}
                     </div>
                   ))}
                 </div>
               </div>
 
               {/* Rows for each time (y-axis) */}
               <div className="space-y-2">
                 {times.map((hour, rIndex) => (
                   <div key={hour} className="flex items-center gap-2">
                     <div className="w-12 text-xs text-slate-600 font-medium">{hour}</div>
                     <div
                       className="flex-1 grid gap-2"
                       style={{ gridTemplateColumns: `repeat(${orderTimeData.length}, minmax(0, 1fr))` }}
                     >
                       {orderTimeData.map((day, cIndex) => {
                         const slot = day.times.find(t => t.hour === hour);
                         const color = slot?.color || 'bg-blue-100';
                         const value = slot?.value ?? 0;
                         return (
                           <div
                             key={`${day.day}-${hour}`}
                             className={`h-12 ${color} rounded-lg transition-all duration-200 hover:ring-2 hover:ring-blue-400 cursor-pointer shadow-sm flex items-center justify-center text-xs text-slate-700`}
                             title={`${day.day} ${hour}: ${value} orders`}
                           >
                             {/* optional small label */}{/* {value} */}
                           </div>
                         );
                       })}
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Recent Order</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Total Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Payment Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Order Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {orders.map((order, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        {order.productName}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        ${order.totalPrice}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPaymentStatusStyle(order.paymentStatus)}`}>
                          {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getOrderStatusStyle(order.orderStatus)}`}>
                          {order.orderStatus === 'in-progress' ? 'In progress' : order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                            <Copy className="w-4 h-4" />
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
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Top Products</h2>
            </div>
            
            <div className="p-6 space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between group hover:bg-slate-50 p-3 -mx-3 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-2xl">
                      {product.image}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
                      <p className="text-xs text-slate-500">{product.sold} Sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">${product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;