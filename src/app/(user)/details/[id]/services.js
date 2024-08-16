'use client';
import React, { Fragment } from 'react';
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from '@/components/ui/accordion';
import {
     Dialog,
     DialogContent, DialogTitle
} from '@/components/ui/dialog';
import Button from '@/components/ui/button';
import { v4 } from 'uuid';
import { cn } from '@/lib/utils';
import { Spinner } from '@/components';
import { POST } from '@/app/api/post';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Add_To_Cart } from '@/redux/features/cartSlice';
import QuickView from '@/components/global/QuickView';

function Services({ data }) {
     const dispatch = useDispatch();
     const user = useSelector((state) => state.userAuth.user) || '';
     const cart = useSelector((state) => state.Cart.cart) || '';
     const cartItems = cart?.bookings_services && cart?.bookings_services.map(item => item?.vendors_service_id) || [];
     const router = useRouter();
     // const allServiceCount = data.service_group.map(item => item.group_service_list.length);
     const allServiceCount = data?.service_group.map(item => item.group_service_list.length).reduce((acc, item) => acc + item, 0);
     const [moreInfo, setmoreInfo] = React.useState(null);
     const [activeTab, setActiveTab] = React.useState('');
     const [loading, setLoading] = React.useState(null);

     const addToBasket = async ({ id, vendors_id, is_couples_massage = 0 }) => {
          if (user) {
               const data = {
                    type: 'services',
                    qty: 1,
                    vendors_service_id: id,
                    vendors_id,
                    is_couples_massage
               };
               setLoading(id);
               const resp = await POST.request({ url: '/add-to-bascket', form: data, token: user?.api_token });
               setLoading(null);
               if (resp && resp.code == 200) {
                    dispatch(Add_To_Cart(resp?.data));
               }
          } else {
               router.push('/sign-in');
          }
     };
     return (
          <div className="flex flex-col gap-4 lg:flex-row min-h-auto md:mb-10">
               <div className="p-4 space-y-3 text-xl shadow-lg rounded-md bg-white h-fit w-full lg:w-[25%] mx-auto z-2 min-h-[350px]">
                    <Button variant="ghost" className={cn('flex items-center justify-between px-0 py-0 text-lg md:w-full', activeTab == '' && 'text-primary')} onClick={e => setActiveTab('')}>
                         <p>All Services</p>
                         <p>({allServiceCount})</p>
                    </Button>
                    {data?.service_group.map((item, index) => {
                         const { group_name, group_service_list } = item;
                         return (
                              group_service_list?.length ? <Button key={v4()} variant="ghost" className={cn('flex items-center justify-between px-0 py-0 text-lg md:w-full', activeTab == item?.id && 'text-primary')} onClick={e => setActiveTab(item?.id)}>
                                   <p>{item?.categories?.title}</p>
                                   <p>({group_service_list.length})</p>
                              </Button> : null
                         )
                    })}
               </div>
               <div className="shadow-lg rounded-md bg-white h-fit w-full lg:w-4/5 mx-auto space-y-5 z-2 min-h-[350px]">
                    <div className="px-4 space-y-3">
                         <Accordion type="single" collapsible className="w-full">
                              {data?.service_group.filter(item => activeTab ? item.id == activeTab ? item : null : item).map((item, index) => {
                                   const group_service_list = Object.groupBy(item?.group_service_list, ({ sub_categories_id }) => sub_categories_id);
                                   return (
                                        Object.values(group_service_list).map(services => {
                                             return (
                                                  <AccordionItem key={v4()} value={services[0]?.sub_categories?.id}>
                                                       <AccordionTrigger className="cursor-pointer hover:no-underline" asChild>
                                                            <div className="flex flex-col items-center justify-between w-full gap-4 text-lg md:flex-row">
                                                                 <div>
                                                                      <div className="flex items-center gap-2">
                                                                           <p>{services[0]?.sub_categories?.title}</p>
                                                                           <Button variant="link" className="px-0 text-sm text-[#0AADA4]" onClick={e => setmoreInfo(services)}>
                                                                                Show Details
                                                                           </Button>
                                                                      </div>
                                                                      <div className="flex items-center gap-2 text-sm">
                                                                           <p>{services[0]?.service_title}</p>
                                                                           <p>({+services[0]?.duration * 60} Min)</p>
                                                                      </div>
                                                                 </div>
                                                                 <div className="flex items-center gap-3">
                                                                      {/* <Button variant="primary" className="mr-3">
                                                                           Replace Dialog
                                                                      </Button> */}
                                                                      <Button variant="primary" className="mr-3 min-w-[150px]">
                                                                           Book Now
                                                                      </Button>
                                                                 </div>
                                                            </div>
                                                       </AccordionTrigger>
                                                       <AccordionContent>
                                                            <div className="bg-[#FAFAFA] space-y-3 p-3 border rounded-lg border-[#E0E0E0]">
                                                                 {services.map((service, i) => {
                                                                      const discount = Math.floor((+service?.sale_price / +service?.price) * 100);
                                                                      return (
                                                                           <Fragment key={v4()}>
                                                                                <div className="flex items-center justify-between gap-10">
                                                                                     <div>
                                                                                          <p className="font-bold">
                                                                                               {service.service_title}
                                                                                               <span className="text-[#808080] font-normal ms-1">
                                                                                                    ({+service?.duration * 60} Min)
                                                                                               </span>
                                                                                          </p>
                                                                                          <p className="flex gap-2 text-primary_color">
                                                                                               {service?.sale_price ? <span>£{service?.sale_price}</span> : null}
                                                                                               <span className={service?.sale_price && 'line-through' || ''}>£{service?.price} </span>{' '}
                                                                                               {service?.sale_price ? <span className="text-[#29AD17]">{discount}% OFF</span> : null}
                                                                                          </p>
                                                                                     </div>
                                                                                     <Button variant="primary" className="mr-3 min-w-[150px]" disabled={loading == service?.id || cartItems.includes(service?.id)} onClick={e => addToBasket(service)}>
                                                                                          {/* <Link href={'/book-service/' + service?.id}> */}
                                                                                          <Spinner
                                                                                               show={loading == service?.id}
                                                                                               width="25"
                                                                                               height="25"
                                                                                               text={cartItems.includes(service?.id) ? "Selected" : "Book Now"}
                                                                                          />
                                                                                          {/* </Link> */}
                                                                                     </Button>
                                                                                </div>
                                                                                {i !== services.length - 1 ? <hr /> : null}
                                                                           </Fragment>
                                                                      )
                                                                 })}
                                                            </div>
                                                       </AccordionContent>
                                                  </AccordionItem>
                                             )
                                        })
                                   )
                              })}
                         </Accordion>
                         <Dialog open={moreInfo ? true : false} className="w-1/2">
                              <DialogContent
                                   close={e => setmoreInfo(null)}
                                   className="sm:max-w-[750px]"
                              >
                                   <DialogTitle className="text-2xl font-bold">
                                        {moreInfo ? moreInfo[0]?.sub_categories?.title : null}
                                   </DialogTitle>
                                   {moreInfo ? <QuickView moreInfo={moreInfo} setmoreInfo={e => setmoreInfo(null)} /> : null}
                              </DialogContent>
                         </Dialog>
                    </div>
               </div>
          </div>
     )
}

export default Services