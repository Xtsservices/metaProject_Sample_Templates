import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, 
  ShoppingCart,  
  ChevronDown,
  Package,
  TrendingUp,
  CreditCard,
  LifeBuoy,
  FileText
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(true)
  // const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  // treat root '/' specially, otherwise match prefix for nested routes
  const isActive = (path?: string) => {
    if (!path) return false
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      hasSubmenu: true,
      submenu: [
        { title: 'Pharmacy Dashboard', path: '/dashboard' },
        { title: 'Analytics Dashboard', path: '/dashboard2' },
        { title: 'Inventory Dashboard', path: '/dashboard3' }
      ]
    },
    { title: 'Products', icon: Package, path: '/products' },
    { title: 'Sales', icon: TrendingUp, path: '/sales' },
    { title: 'Orders', icon: ShoppingCart, path: '/orders' },
    { title: 'Payments', icon: CreditCard, path: '/payments' },
    { title: 'Support', icon: LifeBuoy, path: '/support' },
    { title: 'Invoices', icon: CreditCard, path: '/invoices' },
    { title: 'Invoice List', icon: FileText, path: '/invoice-list' },
    // { title: 'Settings', icon: Settings, path: '/settings' }
  ]

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-16 bottom-0 bg-white dark:bg-gray-900 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-72 flex flex-col border-r border-gray-100 dark:border-gray-800`}>
        
        {/* Navigation */}
        <nav className="p-4 overflow-y-auto flex-1 min-h-0">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors ${isDashboardOpen ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={20} className="text-gray-500 dark:text-gray-400" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`text-gray-500 dark:text-gray-400 transform transition-transform ${isDashboardOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {isDashboardOpen && (
                      <ul className="mt-2 ml-4 space-y-1">
                        {item.submenu?.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className={`block px-4 py-3 text-sm rounded-lg transition-colors ${isActive(subItem.path) ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path || '#'}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.path) ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <item.icon size={20} className="text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed left-0 right-0 top-16 bottom-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
