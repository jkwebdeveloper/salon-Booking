import { GET } from '@/app/api/get';
import { POST } from '@/app/api/post';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const useSalonDetails = ({ id }) => {
     const [salon, setSalon] = React.useState({ data: {}, loading: true });

     const getSalonDetials = async ({ id }) => {
          const resp = await POST.request({ url: `/get-salons-byid`, form: { id: id } });
          if (resp && resp.code == 200) {
               setSalon({ data: resp.data, loading: false });
          } else {
               setSalon({ data: {}, loading: false });
          }
     };

     useEffect(() => {
          id ? getSalonDetials({ page }) : setSalon({ data: {}, loading: false });
     }, [id]);

     return { salon };
}

export default useSalonDetails;