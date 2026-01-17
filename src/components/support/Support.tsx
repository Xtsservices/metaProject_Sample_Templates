import React, { useState } from 'react';
import { Ticket, FileText, ThumbsUp, Users, Trash2 } from 'lucide-react';

interface StatCard {
  value: string;
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

interface TicketCategory {
  name: string;
  value: number;
  color: string;
}

interface AgentData {
  name: string;
  tickets: number;
  color: string;
}

interface SupportTicket {
  id: number;
  openedBy: string;
  customerEmail: string;
  subject: string;
  status: 'new' | 'complete' | 'pending';
  assignedTo: string;
  date: string;
}

const Support: React.FC = () => {
  const stats: StatCard[] = [
    {
      value: '+264',
      label: 'Total Tickets',
      icon: <Ticket className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
      iconColor: 'text-white'
    },
    {
      value: '175',
      label: 'Responded',
      icon: <FileText className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-amber-400 to-amber-500',
      iconColor: 'text-white'
    },
    {
      value: '110',
      label: 'Resolve',
      icon: <ThumbsUp className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-emerald-400 to-emerald-500',
      iconColor: 'text-white'
    },
    {
      value: '59',
      label: 'Pending',
      icon: <Users className="w-6 h-6" />,
      bgColor: 'bg-gradient-to-br from-rose-400 to-rose-500',
      iconColor: 'text-white'
    }
  ];

  const categoryData: TicketCategory[] = [
    { name: 'Technical', value: 8952, color: 'bg-red-400' },
    { name: 'Accounts', value: 7458, color: 'bg-amber-400' },
    { name: 'Other', value: 3254, color: 'bg-blue-500' }
  ];

  const agentData: AgentData[] = [
    { name: 'Andrew', tickets: 154, color: 'bg-blue-500' },
    { name: 'Benjamin', tickets: 164, color: 'bg-emerald-400' },
    { name: 'Elijah', tickets: 254, color: 'bg-teal-400' },
    { name: 'Chloe', tickets: 224, color: 'bg-red-400' },
    { name: 'Daniel', tickets: 213, color: 'bg-amber-400' }
  ];

  const initialTickets: SupportTicket[] = [
    { id: 1011, openedBy: 'Sophia', customerEmail: 'sophia@gmail.com', subject: 'How to customize the template?', status: 'new', assignedTo: 'Elijah', date: '14-10-2018' },
    { id: 1011, openedBy: 'Mia', customerEmail: 'sophia@gmail.com', subject: 'How to customize the template?', status: 'new', assignedTo: 'Elijah', date: '14-10-2018' },
    { id: 1024, openedBy: 'Jayden', customerEmail: 'jayden@gmail.com', subject: 'How to set Horizontal nav', status: 'complete', assignedTo: 'Andrew', date: '13-10-2018' },
    { id: 1224, openedBy: 'William', customerEmail: 'william@gmail.com', subject: 'How to change colors', status: 'complete', assignedTo: 'Benjamin', date: '13-10-2018' },
    { id: 1224, openedBy: 'Chloe', customerEmail: 'william@gmail.com', subject: 'How to change colors', status: 'complete', assignedTo: 'Benjamin', date: '13-10-2018' },
    { id: 1611, openedBy: 'Sophia', customerEmail: 'sophia@gmail.com', subject: 'How to customize the template?', status: 'new', assignedTo: 'Elijah', date: '14-10-2018' },
    { id: 1621, openedBy: 'Sophia', customerEmail: 'sophia@gmail.com', subject: 'How to customize the template?', status: 'new', assignedTo: 'Elijah', date: '14-10-2018' },
    { id: 2124, openedBy: 'Ethan', customerEmail: 'ethan@gmail.com', subject: 'How this will connect with ethan', status: 'pending', assignedTo: 'Andrew', date: '12-10-2018' },
    { id: 2524, openedBy: 'Jayden', customerEmail: 'jayden@gmail.com', subject: 'How to set Horizontal nav', status: 'complete', assignedTo: 'Andrew', date: '13-10-2018' }
  ];
  const [tickets, setTickets] = useState<SupportTicket[]>(initialTickets);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-emerald-500 text-white';
      case 'new':
        return 'bg-amber-400 text-white';
      case 'pending':
        return 'bg-rose-500 text-white';
      default:
        return '';
    }
  };

  const maxTickets = Math.max(...agentData.map(a => a.tickets));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 p-8">
      <div className="max-w-[1600px] mx-auto space-y-8">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Tickets</h1>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span>⊕</span>
            <span>Extra</span>
            <span>›</span>
            <span className="text-blue-600">Tickets</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-white overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </div>
              </div>
              <div className={`${stat.bgColor} p-4 flex items-center justify-center`}>
                <div className={stat.iconColor}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Donut Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-white p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Tickets share per category</h2>
              <button className="text-slate-400 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                  <circle cx="19" cy="12" r="1" fill="currentColor" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-12">
              {/* Donut Chart */}
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Red segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="14"
                    strokeDasharray="75 220"
                    strokeDashoffset="0"
                  />
                  {/* Amber segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="14"
                    strokeDasharray="65 220"
                    strokeDashoffset="-75"
                  />
                  {/* Blue segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="14"
                    strokeDasharray="80 220"
                    strokeDashoffset="-140"
                  />
                </svg>
              </div>
              
              {/* Legend */}
              <div className="space-y-3">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">{category.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{category.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-white p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Tickets share per agent</h2>
              <button className="text-slate-400 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                  <circle cx="19" cy="12" r="1" fill="currentColor" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-end justify-between gap-4 h-48">
              {agentData.map((agent, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full flex flex-col items-center">
                    <div 
                      className={`w-full ${agent.color} rounded-t-lg transition-all duration-300 hover:opacity-80`}
                      style={{ height: `${(agent.tickets / maxTickets) * 160}px` }}
                    ></div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-slate-900 dark:text-white">{agent.name}</div>
                    <div className={`text-xs font-bold px-2 py-0.5 ${agent.color} text-white rounded mt-1`}>
                      {agent.tickets}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Ticket List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-white overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Support Ticket List</h2>
                <p className="text-sm text-blue-600 dark:text-blue-400">List of ticket opened by customers</p>
              </div>
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
                      ID
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Opc. by
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Cust. Email
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Subject
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Status
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Ass. to
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Date
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
                {tickets.map((ticket, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                      {ticket.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                      {ticket.openedBy}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      {ticket.customerEmail}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      {ticket.subject}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={ticket.status}
                        onChange={(e) => {
                          const newStatus = e.target.value as SupportTicket['status'];
                          setTickets(prev => prev.map(t => t.id === ticket.id && t.openedBy === ticket.openedBy ? { ...t, status: newStatus } : t));
                        }}
                        className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold ${getStatusStyle(ticket.status)} border-none focus:outline-none`}
                      >
                        <option value="complete">Complete</option>
                        <option value="new">New</option>
                        <option value="pending">Pending</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      {ticket.assignedTo}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      {ticket.date}
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 text-rose-500 dark:text-rose-400 hover:text-rose-600 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;