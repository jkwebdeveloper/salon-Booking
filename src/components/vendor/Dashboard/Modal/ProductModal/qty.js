import { Button } from '@/components'
import React from 'react'

function Quantity({ value, productID, selectedProducts, setSelectedProducts, quantity_in_stock }) {
     return (
          <div className='grid grid-cols-3 gap-3'>
               <Button className="px-3 py-0 text-2xl text-white rounded-md bg-teal-500/80 h-7" onClick={e => {
                    const product = selectedProducts.find(p => p.id == productID);
                    if (product && product.quantity > 1) {
                         product.quantity = Math.max(0, product.quantity - 1);
                         setSelectedProducts([...selectedProducts]);
                    } else {
                         setSelectedProducts([...selectedProducts.filter(p => p.id != productID)]);
                    }
               }}>
                    -
               </Button>
               <span className="flex items-center self-stretch justify-center px-2 text-center border rounded-md border-neutral-300">
                    {selectedProducts.find(p => p.id == productID)?.quantity || 0}
               </span>
               <Button className="px-3 py-0 text-2xl text-white rounded-md h-7 bg-teal-500/80" onClick={e => {
                    const product = selectedProducts.find(p => p.id == productID);
                    if (quantity_in_stock <= product?.quantity) {
                         return;
                    }
                    if (product) {
                         product.quantity = Math.max(0, product.quantity + 1);
                         setSelectedProducts([...selectedProducts]);
                    } else {
                         setSelectedProducts([...selectedProducts, { id: productID, quantity: 1 }]);
                    }
               }}>
                    +
               </Button>
          </div>
     )
}

export default Quantity