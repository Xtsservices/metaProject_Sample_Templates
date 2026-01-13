import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Layout = ({ children, isOpen, setIsOpen }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={`flex-1 overflow-auto transition-all duration-300 pt-16 ${isOpen ? 'lg:ml-72' : 'lg:ml-0'}`}>
        {children}
      </main>
    </div>
  )
}

export default Layout
