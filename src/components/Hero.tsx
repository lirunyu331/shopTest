import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="bg-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-800 mb-4">
          Design Your Perfect Phone Case
        </h1>
        <p className="text-xl text-indigo-600 mb-8">
          Express yourself with unique, customizable phone cases
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Start Designing
        </button>
      </div>
    </div>
  )
}

export default Hero