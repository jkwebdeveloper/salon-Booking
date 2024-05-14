import { POST } from '@/app/api/post';
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';

const useVendorServices = ({ }) => {
    const vendor = useSelector((state) => state.vendorAuth.vendor);

    const [vendorServices, setVendorServices] = React.useState({ data: [], loading: true });

    const getServices = useCallback(async () => {
        const resp = await POST.request({ url: '/vendor/get-vendor-all-services', token: vendor?.api_token });
        (resp && resp?.code == 200) ? setVendorServices({ data: resp.data, loading: false })
            : setVendorServices({ data: [], loading: false });
    }, []);

    useEffect(() => {
        getServices();
    }, getServices);

    return vendorServices;
}

export default useVendorServices;