import { useState } from 'react';
import { Star } from 'lucide-react';

interface PersonalCareScreenProps {
  onBack: () => void;
}

interface PersonalCareProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  strength?: string;
}

const personalCareProducts: PersonalCareProduct[] = [
  {
    id: 'p1',
    name: 'Hand Sanitizer 500ml',
    price: 6.99,
    originalPrice: 10.99,
    discount: 36,
    rating: 4.9,
    reviews: 312,
    image: '🧴',
    strength: '500ml'
  },
  {
    id: 'p2',
    name: 'Toothbrush Premium',
    price: 4.99,
    originalPrice: 7.99,
    discount: 38,
    rating: 4.5,
    reviews: 189,
    image: '🪥',
    strength: 'Soft'
  },
  {
    id: 'p3',
    name: 'Deodorant Spray 150ml',
    price: 8.99,
    originalPrice: 13.99,
    discount: 36,
    rating: 4.6,
    reviews: 234,
    image: '🧴',
    strength: '150ml'
  },
  {
    id: 'p4',
    name: 'Soap Bar Pack',
    price: 9.99,
    originalPrice: 14.99,
    discount: 33,
    rating: 4.7,
    reviews: 267,
    image: '🧴',
    strength: '4 Bars'
  },
  {
    id: 'p5',
    name: 'Shampoo 250ml',
    price: 10.99,
    originalPrice: 16.99,
    discount: 35,
    rating: 4.6,
    reviews: 201,
    image: '🧴',
    strength: '250ml'
  },
  {
    id: 'p6',
    name: 'Conditioner 250ml',
    price: 11.99,
    originalPrice: 17.99,
    discount: 33,
    rating: 4.5,
    reviews: 178,
    image: '🧴',
    strength: '250ml'
  },
  {
    id: 'p7',
    name: 'Toothpaste 100g',
    price: 5.99,
    originalPrice: 8.99,
    discount: 33,
    rating: 4.8,
    reviews: 245,
    image: '🦷',
    strength: '100g'
  },
  {
    id: 'p8',
    name: 'Body Lotion 300ml',
    price: 12.99,
    originalPrice: 18.99,
    discount: 32,
    rating: 4.7,
    reviews: 223,
    image: '🧴',
    strength: '300ml'
  }
];

export default function PersonalCareScreen({ onBack }: PersonalCareScreenProps) {
  const [cartCount, setCartCount] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState(personalCareProducts);

  const addToCart = (productId: string) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-16">
      {/* Product Grid */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition relative"
            >
              {product.discount && (
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 absolute m-2 rounded z-10">
                  {product.discount}% OFF
                </div>
              )}
              
              <div className="p-6 flex justify-center items-center h-48 bg-gray-50">
                <span className="text-6xl">{product.image}</span>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
                {product.strength && (
                  <p className="text-xs text-gray-500 mb-2">{product.strength}</p>
                )}
                
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-600 ml-2">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-bold text-teal-600">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
