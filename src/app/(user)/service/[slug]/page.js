'use client';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Herosection } from "@/components";
import Vendor from "@/components/ui/cards/vendor";
import Filter from "./filter";
import Spinner from "@/components/ui/spinner";
import FindNearByServices from "@/hooks/findnearbyservices";

const ServiceListing = ({ searchParams, params }) => {
  const [services, setServices, getNearByServices] = FindNearByServices();
  const [filter, setFilter] = React.useState({ categories: [], price: [], rating: 0 });

  const searchSalon = async ({ categories, page = 1, limit = 10 }) => {
    let data = { ...searchParams };
    const formData = {
      "sort_by": "price_asc",
      "min_price": 10,
      "max_price": 3000,
    };
    if (data?.categories) {
      (formData.categories = [data?.categories].map(cat => +cat));
      delete data.categories
    }
    categories && (formData.categories = categories.map(cat => +cat));
    getNearByServices({ ...formData, ...data, page, limit });
  };

  useEffect(() => {
    searchSalon({ page: 1, limit: 10, categories: params?.id ? [params?.id] : null });
  }, [params]);

  return (
    <div className="mb-20 space-y-8">
      <Herosection formData={searchParams} />
      <div className="container space-y-8">
        <p className="text-2xl font-semibold text-black uppercase title heading">
          Search result{" "} <span className="text-primary_color">Massage Services</span>
        </p>
        <div className="flex flex-col min-h-[55dvh] xl:gap-10 gap-3 md:flex-row md:mb-10">
          <Filter filter={filter} setFilter={setFilter} />
          <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px]">
            <div className="grid items-center grid-cols-1 gap-4 xl:grid-cols-2">
              {services?.loading && <Spinner />}
              {services?.data?.listing ? services?.data?.listing.map((vendor, index) => {
                return (
                  (vendor?.services?.length) ? <Vendor vendor={vendor} services={vendor?.services} /> : null
                )
              }) : !services?.loading && <p className="text-lg text-gray-500 text-start">No salon found</p> || ''}
            </div>
          </div>
        </div>
        {/* <PopularSalon /> */}
      </div>
    </div>
  );
};

export default ServiceListing;
