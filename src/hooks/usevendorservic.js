import { GET } from '@/app/api/get';
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';

const useVendorServices = () => {
    const vendor = useSelector((state) => state.vendorAuth.vendor);
    const [vendorServices, setVendorServices] = React.useState({ data: [], loading: true });

    const getServices = async () => {
        const resp = await GET.request({ url: '/vendor/get-vendor-all-services', token: vendor?.api_token });
        if (resp && resp?.code == 200) {
            return { data: resp.data, loading: false }
        } else {
            return { data: [], loading: false };
        }
    };

    useEffect(() => {
        getServices().then(data => setVendorServices(data));
    }, []);

    return [getServices, vendorServices];
}

export default useVendorServices;