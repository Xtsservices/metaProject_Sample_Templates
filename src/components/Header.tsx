import React from 'react'
import { Search, Bell, Settings, Moon, MessageCircle, AtSign, Clipboard, Maximize2, Menu, X } from 'lucide-react'

interface HeaderProps {
  isOpen?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-16 flex items-center px-4">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center gap-3">
          {/* menu button placed beside the title */}
          <button
            onClick={() => setIsOpen?.(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="p-2 rounded-md bg-white hover:bg-gray-100 flex items-center justify-center"
          >
            {isOpen ? <X size={20} color="#374151" /> : <Menu size={20} color="#374151" />}
          </button>

          <span className="text-lg font-semibold">Pharmacy Admin</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-4 rounded-md bg-gray-50 border border-gray-100 focus:outline-none"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={16} />
            </div>
          </div>
        </div>

        {/* Center icon cluster (as in the image) */}
        <div className="hidden sm:flex items-center gap-3 mx-4">
          <button aria-label="Messages" className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-50 text-purple-600">
            <MessageCircle size={16} />
          </button>
          <button aria-label="Mentions" className="w-8 h-8 rounded-full flex items-center justify-center bg-pink-50 text-pink-600">
            <AtSign size={16} />
          </button>
          <button aria-label="Tasks" className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-600">
            <Clipboard size={16} />
          </button>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-md hover:bg-gray-100" aria-label="Toggle theme"><Moon size={18} /></button>

          {/* fullscreen like the yellow square in the image */}
          <button
            className="p-2 rounded-md hover:opacity-90 bg-yellow-400 text-white flex items-center justify-center"
            aria-label="Toggle fullscreen"
          >
            <Maximize2 size={18} />
          </button>

          <button className="p-2 rounded-md hover:bg-gray-100" aria-label="Notifications"><Bell size={18} /></button>
          <img src="/path/to/avatar.jpg" alt="avatar" className="w-8 h-8 rounded-full object-cover" />
          <button className="p-2 rounded-md hover:bg-gray-100" aria-label="Settings"><Settings size={18} /></button>
        </div>
      </div>
    </header>
  )
}

export default Header
