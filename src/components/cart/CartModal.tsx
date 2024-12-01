import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export function CartModal() {
  const { state, dispatch } = useCart();
  
  if (!state.isOpen) return null;

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={() => dispatch({ type: 'TOGGLE_CART' })} 
      />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3 bg-white">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button 
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="hover:bg-gray-100 p-1 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        {state.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <ShoppingBag className="h-16 w-16 text-gray-400" />
            <p className="text-lg text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Scrollable Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-4">
                {state.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center space-x-4 border rounded-lg p-4 bg-white"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
                            })
                          }
                          className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: { id: item.id, quantity: item.quantity + 1 },
                            })
                          }
                          className="rounded-full bg-gray-100 p-1 hover:bg-gray-200"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                      className="text-red-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-4 bg-white">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full rounded-full bg-black py-3 text-white hover:bg-gray-800 transition-colors">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}