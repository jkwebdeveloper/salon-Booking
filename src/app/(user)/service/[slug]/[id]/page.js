import React from 'react'
import ServiceListing from '@/app/(user)/service/[slug]/page';

function ServiceID({ params }) {
     return (
          <ServiceListing params={params} />
     )
}

export default ServiceID