import { GET } from '@/app/api/get';
import { POST } from '@/app/api/post';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const useSupplierList = ({ page }) => {
    const vendor = useSelector((state) => state.vendorAuth.vendor);
    const [suppliers, setSuppliers] = React.useState({ data: [], loading: true });

    const getSuppliers = async ({ page = 1, limit = 10 }) => {
        const resp = await POST.request({ url: `/vendor/get-supplier`, form: { page, limit }, token: vendor?.api_token });
        (resp && resp?.code == 200) ? setSuppliers({ data: resp.data, loading: false })
            : setSuppliers({ data: [], loading: false });
    };

    useEffect(() => {
        getSuppliers({ page });
    }, []);

    return [suppliers, setSuppliers, getSuppliers];
}

export default useSupplierList;