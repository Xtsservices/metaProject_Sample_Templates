import React from 'react';
import { Package, TrendingUp, TrendingDown, AlertTriangle, XCircle, Pill, Droplet, Heart, Syringe, Wind, Shield, Activity, MoreVertical, Eye, Edit, Share2 } from 'lucide-react';

interface ProductCategory {
  name: string;
  count: number;
  trend: number;
  icon: React.ReactNode;
  color: string;
}

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  status: 'in-stock' | 'out-of-stock' | 'low-stock';
}

const Products: React.FC = () => {
  const categories: ProductCategory[] = [
    { name: 'Antibiotics', count: 200, trend: 3.2, icon: <Pill className="w-6 h-6" />, color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { name: 'Pain Relievers', count: 70, trend: -0.8, icon: <Heart className="w-6 h-6" />, color: 'bg-white' },
    { name: 'Vitamins & Supplements', count: 90, trend: 10, icon: <Droplet className="w-6 h-6" />, color: 'bg-white' },
    { name: 'Antiviral Drugs', count: 75, trend: -2, icon: <Shield className="w-6 h-6" />, color: 'bg-white' },
    { name: 'Diabetes Care', count: 30, trend: 10, icon: <Syringe className="w-6 h-6" />, color: 'bg-white' },
    { name: 'Respiratory Medicines', count: 60, trend: 10, icon: <Wind className="w-6 h-6" />, color: 'bg-white' },
    { name: 'Allergy Medication', count: 80, trend: 10, icon: <Activity className="w-6 h-6" />, color: 'bg-white' },
    { name: 'Cardiovascular', count: 40, trend: 10, icon: <Activity className="w-6 h-6" />, color: 'bg-white' }
  ];

  const products: Product[] = [
    { id: '#ORD121', name: 'Nullacin', quantity: 120, price: 2.08, status: 'in-stock' },
    { id: '#ORD122', name: 'Medicanox', quantity: 50, price: 5, status: 'out-of-stock' },
    { id: '#ORD123', name: 'Theralief', quantity: 30, price: 10, status: 'low-stock' },
    { id: '#ORD124', name: 'CP-0004', quantity: 80, price: 5, status: 'in-stock' },
    { id: '#ORD125', name: 'INV-251', quantity: 10, price: 8, status: 'in-stock' }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      case 'out-of-stock':
        return 'bg-rose-50 text-rose-600 border border-rose-200';
      case 'low-stock':
        return 'bg-amber-50 text-amber-600 border border-amber-200';
      default:
        return '';
    }
  };

  const getTrendIcon = (trend: number) => {
    if (trend > 0) {
      return <TrendingUp className="w-3 h-3" />;
    }
    return <TrendingDown className="w-3 h-3" />;
  };

  const getTrendStyle = (trend: number) => {
    if (trend > 0) {
      return 'bg-emerald-50 text-emerald-600';
    }
    return 'bg-rose-50 text-rose-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600">Total Products</span>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-baseline gap-2">
              <Package className="w-5 h-5 text-slate-400" />
              <span className="text-3xl font-bold text-slate-900">20,120</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-amber-50">Low Stock</span>
              <div className="flex items-center gap-2">
                    <MoreVertical className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-50" />
              <span className="text-3xl font-bold">120</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-rose-50">Out Of Stock</span>
              <div className="flex items-center gap-2">
                    <MoreVertical className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <XCircle className="w-5 h-5 text-rose-50" />
              <span className="text-3xl font-bold">80</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-2xl shadow-sm border ${
                category.name === 'Antibiotics' ? 'border-blue-300 text-white' : 'border-slate-200'
              } p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${
                  category.name === 'Antibiotics' ? 'bg-white/20' : 'bg-slate-100'
                }`}>
                  <div className={category.name === 'Antibiotics' ? 'text-white' : 'text-slate-700'}>
                    {category.icon}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                    <MoreVertical className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className={`text-sm font-medium mb-2 ${
                category.name === 'Antibiotics' ? 'text-blue-50' : 'text-slate-600'
              }`}>
                {category.name}
              </h3>
              
              <div className="flex items-baseline justify-between">
                <span className={`text-3xl font-bold ${
                  category.name === 'Antibiotics' ? 'text-white' : 'text-slate-900'
                }`}>
                  {category.count}
                </span>
                
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                  category.name === 'Antibiotics' 
                    ? 'bg-white/20 text-white'
                    : getTrendStyle(category.trend)
                }`}>
                  {getTrendIcon(category.trend)}
                  <span>{category.trend > 0 ? '+' : ''}{category.trend}%</span>
                </div>
              </div>
              
              <p className={`text-xs mt-2 ${
                category.name === 'Antibiotics' ? 'text-blue-100' : 'text-slate-500'
              }`}>
                Since Last Week
              </p>
            </div>
          ))}
        </div>

        {/* Product List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Product List</h2>
              <div className="flex items-center gap-3">
                <select className="px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                </select>
                <span className="text-sm text-slate-500">entries</span>
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
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Product ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {products.map((product, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {product.quantity} Units
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(product.status)}`}>
                        {product.status === 'in-stock' && 'In stock'}
                        {product.status === 'out-of-stock' && 'Out of stock'}
                        {product.status === 'low-stock' && 'Low stock'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <Edit className="w-4 h-4" />
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
              Showing 1 to 5 of 6 entries
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                2
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

export default Products;