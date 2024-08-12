'use client';
import React from 'react'
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from '@/components/ui/accordion';
import {
     Dialog,
     DialogContent,
     DialogTrigger,
     DialogTitle,
} from '@/components/ui/dialog';
import Button from '@/components/ui/button';
import Link from 'next/link';
import Modal from '@/app/(user)/details/[slug]/[id]/Modal';

function Services() {
     const [moreInfo, setmoreInfo] = React.useState(false);
     return (
          <Accordion type="single" collapsible className="w-full">
               {/* Accordion Items */}
               <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline" asChild>
                         <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
                              <div>
                                   <div className="flex items-center gap-2">
                                        <p>Couples Massage</p>
                                        <Dialog open={moreInfo} className="w-1/2">
                                             <DialogTrigger
                                                  onClick={e => setmoreInfo(true)}
                                                  className="text-sm text-[#0AADA4]"
                                             >
                                                  Show Details
                                             </DialogTrigger>
                                             <DialogContent
                                                  close={setmoreInfo}
                                                  className="sm:max-w-[750px]"
                                             >
                                                  <DialogTitle className="text-3xl font-bold">
                                                       Couples Massage
                                                  </DialogTitle>
                                                  <Modal setmoreInfo={setmoreInfo} />
                                             </DialogContent>
                                        </Dialog>
                                   </div>
                                   <div className="flex items-center gap-2">
                                        <p>Spa Massage</p>
                                        <p>(2 hr)</p>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3">
                                   <Button variant="primary" className="mr-3">
                                        Replace Dialog
                                   </Button>
                                   <Button variant="primary" className="mr-3">
                                        Book Now
                                   </Button>
                              </div>
                         </div>
                    </AccordionTrigger>
                    <AccordionContent>
                         <div className="bg-[#FAFAFA] space-y-3 p-3 border rounded-lg border-[#E0E0E0]">
                              <div className="flex items-center justify-between gap-10">
                                   <div>
                                        <p className="font-bold">
                                             Sunday Soother Spa Break
                                             <span className="text-[#808080] font-normal">
                                                  (50 Min)
                                             </span>
                                        </p>
                                        <p className="text-primary_color">
                                             £199{' '}
                                             <span>£299 </span>{' '}
                                             <span className="text-[#29AD17]">
                                                  30% OFF
                                             </span>
                                        </p>
                                   </div>
                                   <Link href="/employee-time">
                                        <Button variant="primary" className="mr-3">
                                             Book Now
                                        </Button>
                                   </Link>
                              </div>
                              <hr />
                              <div className="flex items-center justify-between gap-10">
                                   <div>
                                        <p className="font-bold">
                                             Sunday Soother Spa Break
                                             <span className="text-[#808080] font-normal">
                                                  (50 Min)
                                             </span>
                                        </p>
                                        <p className="text-primary_color">
                                             £199{' '}
                                             <span>£299 </span>{' '}
                                             <span className="text-[#29AD17]">
                                                  30% OFF
                                             </span>
                                        </p>
                                   </div>
                                   <Button variant="primary" className="mr-3">
                                        Book Now
                                   </Button>
                              </div>
                         </div>
                    </AccordionContent>
               </AccordionItem>
          </Accordion>
     )
}

export default Services