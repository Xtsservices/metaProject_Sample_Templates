import { useState } from 'react';
import { ArrowLeft, Star, Filter, ChevronDown, ShoppingCart } from 'lucide-react';

interface VitaminsScreenProps {
  onBack: () => void;
}

interface VitaminProduct {
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

const vitaminProducts: VitaminProduct[] = [
  {
    id: 'v1',
    name: 'Vitamin C 1000mg',
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.5,
    reviews: 128,
    image: '💊',
    strength: '1000mg'
  },
  {
    id: 'v2',
    name: 'Vitamin D3 2000IU',
    price: 19.99,
    originalPrice: 25.99,
    discount: 23,
    rating: 4.7,
    reviews: 95,
    image: '💊',
    strength: '2000IU'
  },
  {
    id: 'v3',
    name: 'Vitamin B-Complex',
    price: 22.99,
    originalPrice: 32.99,
    discount: 30,
    rating: 4.6,
    reviews: 112,
    image: '💊',
    strength: 'Complex'
  },
  {
    id: 'v4',
    name: 'Vitamin E 400IU',
    price: 18.99,
    originalPrice: 28.99,
    discount: 35,
    rating: 4.4,
    reviews: 87,
    image: '💊',
    strength: '400IU'
  },
  {
    id: 'v5',
    name: 'Multivitamin Daily',
    price: 29.99,
    originalPrice: 44.99,
    discount: 33,
    rating: 4.8,
    reviews: 156,
    image: '💊',
    strength: 'Daily'
  },
  {
    id: 'v6',
    name: 'Vitamin A 5000IU',
    price: 15.99,
    originalPrice: 21.99,
    discount: 27,
    rating: 4.3,
    reviews: 72,
    image: '💊',
    strength: '5000IU'
  },
  {
    id: 'v7',
    name: 'Vitamin K2 100mcg',
    price: 26.99,
    originalPrice: 39.99,
    discount: 32,
    rating: 4.6,
    reviews: 101,
    image: '💊',
    strength: '100mcg'
  },
  {
    id: 'v8',
    name: 'Biotin Hair Health',
    price: 23.99,
    originalPrice: 33.99,
    discount: 29,
    rating: 4.5,
    reviews: 118,
    image: '💊',
    strength: 'Hair Formula'
  }
];

export default function VitaminsScreen({ onBack }: VitaminsScreenProps) {
  const [cartCount, setCartCount] = useState(0);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilter, setShowFilter] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(vitaminProducts);

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...vitaminProducts];
    
    switch(value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sorted.reverse();
        break;
      default:
        sorted = vitaminProducts;
    }
    
    setDisplayedProducts(sorted);
  };

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
