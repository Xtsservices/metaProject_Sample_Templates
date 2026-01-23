import { useState } from 'react';
import { Star } from 'lucide-react';

interface SupplementsScreenProps {
  onBack: () => void;
}

interface SupplementProduct {
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

const supplementProducts: SupplementProduct[] = [
  {
    id: 's1',
    name: 'Omega-3 Fish Oil',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.6,
    reviews: 189,
    image: '🧪',
    strength: '1000mg'
  },
  {
    id: 's2',
    name: 'Protein Powder',
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
    rating: 4.7,
    reviews: 267,
    image: '🧪',
    strength: '1kg'
  },
  {
    id: 's3',
    name: 'Collagen Peptides',
    price: 27.99,
    originalPrice: 39.99,
    discount: 30,
    rating: 4.5,
    reviews: 156,
    image: '🧪',
    strength: '500g'
  },
  {
    id: 's4',
    name: 'Magnesium Supplement',
    price: 18.99,
    originalPrice: 28.99,
    discount: 34,
    rating: 4.6,
    reviews: 134,
    image: '🧪',
    strength: '400mg'
  },
  {
    id: 's5',
    name: 'Probiotic Capsules',
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.8,
    reviews: 223,
    image: '🧪',
    strength: '50 Capsules'
  },
  {
    id: 's6',
    name: 'Iron Supplement',
    price: 15.99,
    originalPrice: 24.99,
    discount: 36,
    rating: 4.4,
    reviews: 112,
    image: '🧪',
    strength: '65mg'
  },
  {
    id: 's7',
    name: 'Calcium + Vitamin D',
    price: 22.99,
    originalPrice: 32.99,
    discount: 30,
    rating: 4.7,
    reviews: 201,
    image: '🧪',
    strength: 'Combo'
  },
  {
    id: 's8',
    name: 'Zinc Boost',
    price: 16.99,
    originalPrice: 25.99,
    discount: 35,
    rating: 4.5,
    reviews: 145,
    image: '🧪',
    strength: '30mg'
  }
];

export default function SupplementsScreen({ onBack }: SupplementsScreenProps) {
  const [cartCount, setCartCount] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState(supplementProducts);

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
