import React from 'react'
import { Smartphone } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Smartphone className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-2xl font-bold text-indigo-600">CaseCustom</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Shop</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Customize</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header