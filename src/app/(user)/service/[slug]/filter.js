import React from 'react';
import { Button } from "@/components";
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { useCategory } from '@/hooks';

const sortBy = [{
     value: 'recommended',
     label: 'Recommended'
}, {
     value: 'highest_rated',
     label: 'Highest Rated'
}, {
     value: 'lowest_price',
     label: 'Lowest Price'
}, {
     value: 'highest_price',
     label: 'Highest Price'
}, {
     value: 'discount',
     label: 'Discount'
}];

function Filter({ filter, setFilter }) {
     const mainCat = useCategory();
     return (
          <div className="shadow-lg md:sticky top-5 rounded-md h-fit md:w-[40%] lg:w-[25%] w-[90%] mx-auto space-y-3 p-4 bg-white">
               <div className="flex items-center justify-between">
                    <p className="font-bold">Filters</p>
                    <p className="text-sm uppercase">Clear all</p>
               </div>
               <hr />
               <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                         <AccordionTrigger asChild className="cursor-pointer">
                              <p>Sort by</p>
                         </AccordionTrigger>
                         {sortBy.map((sortByItem, index) => (
                              <AccordionContent>
                                   <li class="w-full list-none">
                                        <div class="flex items-center">
                                             <input
                                                  id={sortByItem.value}
                                                  type="radio"
                                                  name="sort_by"
                                                  value={sortByItem.value}
                                                  defaultChecked={filter.sort_by === sortByItem.value || index === 0}
                                                  onChange={(e) => {
                                                       setFilter(prev => ({ ...filter, sort_by: e.target.value }))
                                                  }}
                                             />
                                             <label
                                                  for={sortByItem.value}
                                                  class="w-full ms-2 text-sm font-medium text-gray-900 "
                                             >
                                                  {sortByItem?.label}
                                             </label>
                                        </div>
                                   </li>
                              </AccordionContent>
                         ))}
                    </AccordionItem>
                    <AccordionItem value="item-2">
                         <AccordionTrigger asChild className="cursor-pointer">
                              Price Range
                         </AccordionTrigger>
                         <AccordionContent>
                              <Slider
                                   onValueChange={e => {
                                        setFilter(prev => ({ ...filter, min_price: e[0], max_price: e[1] }))
                                   }}
                                   defaultValue={[0, 1000]}
                                   max={1000}
                                   step={1}
                              />
                         </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                         <AccordionTrigger asChild className="cursor-pointer">
                              Treatments
                              {console.log(filter)}
                         </AccordionTrigger>
                         {!mainCat?.loading && mainCat.data?.map((navItem, index) => {
                              return (
                                   <AccordionContent>
                                        <li class="w-full list-none">
                                             <div class="flex items-center">
                                                  <input
                                                       id={navItem.id}
                                                       type="checkbox"
                                                       defaultValue={navItem.id}
                                                       name="categories"
                                                       class=""
                                                       onChange={(e) => {
                                                            e.target.checked ? setFilter(prev => ({ ...filter, categories: [...filter.categories, navItem.id] })) : setFilter(prev => ({ ...filter, categories: filter.categories.filter(item => item !== navItem.id) }))
                                                       }}
                                                  />
                                                  <label
                                                       for={navItem.id}
                                                       class="w-full ms-2 text-sm font-medium text-gray-900 "
                                                  >
                                                       {navItem.title}
                                                  </label>
                                             </div>
                                        </li>
                                   </AccordionContent>
                              )
                         })}
                    </AccordionItem>
               </Accordion>
               <Button variant="primary" className="md:w-full">Show results</Button>
          </div>
     )
}

export default Filter