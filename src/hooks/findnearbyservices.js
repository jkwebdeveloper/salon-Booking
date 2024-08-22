import { GET } from '@/app/api/get';
import { POST } from '@/app/api/post';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const FindNearByServices = () => {
     const [services, setServices] = React.useState({ data: {}, loading: true });

     const getNearByServices = async (form) => {
          console.log('form', form);
          const resp = await POST.request({ url: `/find-near-by-services`, form, rawdata: true });
          if (resp && resp.code == 200) {
               setServices({ data: resp.data, loading: false })
          } else {
               setServices({ data: {}, loading: false });
          }
     };

     return [services, setServices, getNearByServices];
}

export default FindNearByServices;