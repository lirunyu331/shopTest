import React from 'react'

const ProductShowcase: React.FC = () => {
  const products = [
    { id: 1, name: 'Floral Design', image: 'https://images.unsplash.com/photo-1607508966603-c2c8b0c7b2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Abstract Art', image: 'https://images.unsplash.com/photo-1607508966603-c2c8b0c7b2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Minimalist', image: 'https://images.unsplash.com/photo-1607508966603-c2c8b0c7b2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Geometric', image: 'https://images.unsplash.com/photo-1607508966603-c2c8b0c7b2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Popular Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-indigo-700 transition duration-300">
                  Customize
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductShowcase