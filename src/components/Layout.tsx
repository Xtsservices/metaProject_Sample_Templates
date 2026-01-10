import React from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Layout = ({ children, isOpen, setIsOpen }: LayoutProps) => {
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
