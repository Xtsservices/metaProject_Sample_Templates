import React, { useState } from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={`flex-1 overflow-auto transition-all duration-300 ${isOpen ? 'lg:ml-72' : 'lg:ml-0'}`}>
        {children}
      </main>
    </div>
  )
}

export default Layout
