import { GET } from '@/app/api/get';
import { Button, Error, Spinner } from '@/components'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Quantity from './qty';
import { v4 } from 'uuid';
import { POST } from '@/app/api/post';
import useOrders from '@/hooks/useOrders';

function CreateOrder({ supplier, setAddDialog, activePage }) {
     const vendor = useSelector(state => state.vendorAuth.vendor);
     const [supplierProducts, setSupplierProducts] = useState([]);
     const [loading, setLoading] = useState(true);
     const [orders, setOrders, getOrders] = useOrders({ page: 1 });
     const { id, supplier_name, products_count, contact_persion } = supplier || {};
     const [selectedProducts, setSelectedProducts] = useState([]);
     const [formState, setFormState] = React.useState({
          loading: false,
          error: "",
          success: "",
     });

     const getSuggestedProducts = async () => {
          setLoading(true);
          const resp = await GET.request({ url: `/vendor/get-supplier-products?supplier_id=${supplier?.id}`, token: vendor?.api_token });
          setLoading(false);
          if (resp && resp.code == 200) {
               console.log(resp.data);
               setSupplierProducts(resp.data);
          }
     }

     const createOrder = async (e) => {
          e.preventDefault();
          if (selectedProducts.length == 0) {
               setFormState({ ...formState, error: "Please select at least one product" });
               return;
          } else {
               setFormState({ ...formState, error: "" });
          }
          const data = {
               suppliers_id: supplier?.id,
               items: selectedProducts.map(p => ({ products_id: p.id, quantity: p.quantity }))
          };
          const resp = await POST.request({ url: '/vendor/create-orders', token: vendor?.api_token, form: data, rawdata: true, formState, setFormState });
          if (resp && resp.code === 200) {
               getOrders({ page: activePage || 1 });
               setAddDialog(false);
          }
     }

     useEffect(() => {
          getSuggestedProducts();
     }, [supplier]);
     return (
          <div className="space-y-4">
               <p className="font-semibold capitalize">{supplier_name}</p>
               <hr />
               {loading
                    && <div className='min-h-[200px] flex items-center justify-center'> <Spinner show={loading} width={40} height={40} /> </div>
                    || <>
                         <div className="overflow-x-auto bg-white rounded-lg">
                              <table className="min-w-full rounded-lg font-[sans-serif]">
                                   <thead className="border-b-2 bg-[#F2F2F2] whitespace-nowrap">
                                        <tr>
                                             <th className="px-6 py-3 text-sm font-semibold text-left">
                                                  Product
                                             </th>
                                             <th className="px-6 py-3 text-sm font-semibold text-left">
                                                  In Stock
                                             </th>
                                             <th className="px-6 py-3 text-sm font-semibold text-left">
                                                  Quantity to order
                                             </th>
                                        </tr>
                                   </thead>
                                   <tbody className="border-b-2 whitespace-nowrap">
                                        {supplierProducts.map(({ id, name, quantity_in_stock }, index) => (
                                             <tr className="" key={v4()}>
                                                  <td className="px-6 py-4 text-sm capitalize">
                                                       {name || "N/A"}
                                                  </td>
                                                  <td className="p-2 px-6 py-4 text-sm ">
                                                       <p className="w-max mx-auto px-2 py-1 text-center text-black border-bg-[#D9D9D9] border rounded-md">
                                                            {quantity_in_stock || 0}
                                                       </p>
                                                  </td>
                                                  <td className="flex items-center gap-2 px-6 py-4 text-sm">
                                                       <Quantity productID={id} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} quantity_in_stock={quantity_in_stock} />
                                                  </td>
                                             </tr>
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                         <Button variant="primary" onClick={e => createOrder(e)} disabled={formState?.loading}>
                              <Spinner
                                   show={formState?.loading}
                                   width="25"
                                   height="25"
                                   text="create order"
                              />
                         </Button>
                         {formState?.error && <Error error={formState?.error} />}
                    </>}
          </div>
     )
}

export default CreateOrder