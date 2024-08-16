'use client';
import { Herosection } from "@/components";
import React, { useEffect } from "react";


import PopularSalon from "@/components/user/Home/PopularSalon";
import Vendor from "@/components/ui/cards/vendor";
import { useRouter } from "next/navigation";
import { GET } from "@/app/api/get";
import Filter from "./filter";
import { set } from "date-fns";
import Spinner from "@/components/ui/spinner";

const ServiceListing = ({ searchParams, params }) => {
  const router = useRouter();
  const [salons, setSalons] = React.useState({ data: [], loading: true });

  const searchSalon = async ({ page = 1, limit = 10 }) => {
    const formData = {
      "sort_by": "price_asc",
      "min_price": 10,
      "max_price": 3000,
      "page": page,
      "limit": limit
    };
    searchParams?.date && (formData.date = searchParams.date);
    searchParams?.time && (formData.time = searchParams.time);
    searchParams?.lat && (formData.lat = searchParams.lat);
    searchParams?.long && (formData.long = searchParams.long);
    searchParams?.categories && (formData.categories = searchParams.categories);
    searchParams?.search_terms && (formData.search_terms = searchParams.search_terms);

    const urlParams = new URLSearchParams(formData).toString();
    const resp = await GET.request({ url: '/find-near-by-services?' + urlParams });
    if (resp && resp?.code == 200) {
      console.log(resp.data.listing);
      setSalons({ data: resp.data.listing, loading: false });
    } else {
      setSalons({ data: [], loading: false });
      console.log(resp);
    }
  };

  useEffect(() => {
    if (params && params?.slug == 'search') {
      searchSalon({ page: 1, limit: 10 });
    }
  }, [params]);

  return (
    <div className="mb-20 space-y-8">
      <Herosection formData={searchParams} />
      <div className="container space-y-8">
        <p className="text-2xl font-semibold text-black uppercase title heading">
          Search result{" "} <span className="text-primary_color">Massage Services</span>
        </p>
        <div className="flex flex-col min-h-[55dvh] xl:gap-10 gap-3 md:flex-row md:mb-10">
          <Filter />
          <div className="md:w-4/5 w-[90%] mx-auto space-y-5 h-fit min-h-[350px]">
            <div className="grid items-center grid-cols-1 gap-4 xl:grid-cols-2">
              {salons?.loading && <Spinner />}
              {salons.data?.length ? salons.data.map((vendor, index) => {
                return (
                  (vendor?.services?.length) ? <Vendor vendor={vendor} services={vendor?.services} /> : null
                )
              }) : !salons?.loading && <p className="text-lg text-gray-500 text-start">No salon found</p> || ''}
            </div>
          </div>
        </div>
        {/* <PopularSalon /> */}
      </div>
    </div>
  );
};

export default ServiceListing;
