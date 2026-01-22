import React, { useState, useEffect } from 'react'
import { Search, Bell, Settings, Moon, Sun, MessageCircle, AtSign, Clipboard, Maximize2, Minimize2, Menu, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface HeaderProps {
  isOpen?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    const handleChange = () => setIsFullScreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handleChange)
    return () => document.removeEventListener('fullscreenchange', handleChange)
  }, [])

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen()
      } catch {}
    } else {
      try {
        await document.exitFullscreen()
      } catch {}
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 h-16 flex items-center px-4">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen?.(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="p-2 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"
          >
            {isOpen ? <X size={20} className="text-gray-700 dark:text-gray-200" /> : <Menu size={20} className="text-gray-700 dark:text-gray-200" />}
          </button>

          <span className="text-lg font-semibold text-gray-900 dark:text-white">Pharmancy Admin</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-4 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
              <Search size={16} />
            </div>
          </div>
        </div>

        {/* Center icon cluster */}
        <div className="hidden sm:flex items-center gap-3 mx-4">
          <button aria-label="Messages" className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-50 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-500/30">
            <MessageCircle size={16} />
          </button>
          <button aria-label="Mentions" className="w-8 h-8 rounded-full flex items-center justify-center bg-pink-50 dark:bg-pink-500/20 text-pink-600 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-500/30">
            <AtSign size={16} />
          </button>
          <button aria-label="Tasks" className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-500/30">
            <Clipboard size={16} />
          </button>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button 
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-400" 
            aria-label="Toggle theme"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="p-2 rounded-md hover:opacity-90 bg-yellow-400 dark:bg-yellow-500 text-white flex items-center justify-center"
            aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
            onClick={toggleFullscreen}
          >
            {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-400" aria-label="Notifications"><Bell size={18} /></button>
          <img src="/path/to/avatar.jpg" alt="avatar" className="w-8 h-8 rounded-full object-cover" />
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-400" aria-label="Settings"><Settings size={18} /></button>
        </div>
      </div>
    </header>
  )
}

export default Header
