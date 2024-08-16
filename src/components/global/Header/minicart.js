import React, { Fragment } from 'react';
import { GrCart } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "@/components";

import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuGroup,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import Link from 'next/link';
import { POST } from '@/app/api/post';
import { Add_To_Cart } from '@/redux/features/cartSlice';

function MiniCart() {
     const dispatch = useDispatch();
     const user = useSelector((state) => state.userAuth.user);
     const cart = useSelector((state) => state.Cart.cart) || '';
     const [open, setOpen] = React.useState(false);

     const emptyCart = async () => {
          const resp = await POST.request({ url: '/empty-bascket', token: user?.api_token });
          if (resp && resp.code == 200) {
               dispatch(Add_To_Cart(resp?.data));
          }
     };

     const removeCartItem = async (id) => {
          const resp = await POST.request({ url: '/remove-to-bascket', form: { type: 'services', id }, token: user?.api_token });
          if (resp && resp.code == 200) {
               if (resp?.data?.bookings_services?.length == 0) {
                    emptyCart();
               } else {
                    dispatch(Add_To_Cart(resp?.data));
               }
          }
     }
     return (
          <DropdownMenu open={open}>
               <DropdownMenuTrigger className="relative focus-visible:outline-none">
                    <Button
                         type="button"
                         // parent={true}
                         variant="ghost"
                         size="icon"
                         className="relative uppercase"
                         onClick={() => setOpen(!open)}
                    >
                         {cart?.bookings_services?.length ?
                              <span className='absolute w-5 h-5 text-white rounded-full -top-1 -right-2 bg-primary'>
                                   {cart?.bookings_services?.length}
                              </span> : null
                         }
                         <GrCart className="text-2xl cursor-pointer text-primary_color" />
                    </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent onInteractOutside={e => setOpen(false)} className="w-full min-w-[200px] mt-2 -translate-x-1 bg-white ring-1 ring-neutral-200">
                    <DropdownMenuLabel className="text-primary_color">
                         My basket
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                         {(cart?.bookings_services?.length && cart?.bookings_services.length > 0) ? cart?.bookings_services?.map((item, index) => (
                              <Fragment key={v4()}>
                                   <DropdownMenuItem className="flex items-start justify-between gap-4">
                                        <div className="">
                                             <p className="font-semibold">{item?.vendors_service_info?.service_title}</p>
                                             {/* {console.log(item?.vendors_service_info?.duration * 60)} */}
                                             <p className="text-xs">{+item?.vendors_service_info?.duration * 60} Mins</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                             <p className="text-primary_color">£{item?.vendors_service_info?.sale_price || item?.vendors_service_info?.price}</p>
                                             <IoCloseOutline className="text-lg cursor-pointer" onClick={e => removeCartItem(item?.id)} />
                                        </div>
                                   </DropdownMenuItem>
                                   {/* {index < cart?.booking_services?.length - 1 ? <DropdownMenuSeparator /> : ''} */}
                              </Fragment>
                         )) : <p className='px-2 pb-3'>No Items in Cart</p>}
                         {cart?.bookings_services?.length ? <DropdownMenuItem className="flex items-center justify-between gap-4">
                              <Button
                                   type="button"
                                   // className="uppercase transition-all outline_button hover:bg-primary_color hover:text-white"
                                   variant="primary"
                                   className="md:w-full"
                                   asChild
                                   onClick={e => setOpen(false)}
                              >
                                   <Link href={"/details" + "/salon-name/" + cart?.vendors_info.id}>
                                        + Add more
                                   </Link>
                              </Button>
                              <Button variant="primary" className="md:w-full" asChild onClick={e => setOpen(false)}>
                                   <Link href="/book-service">
                                        Go to checkout
                                   </Link>
                              </Button>
                         </DropdownMenuItem> : null}
                    </DropdownMenuGroup>
               </DropdownMenuContent>
          </DropdownMenu>
     )
}

export default MiniCart