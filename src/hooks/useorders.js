import { GET } from '@/app/api/get';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const useOrders = ({ page }) => {
    const vendor = useSelector((state) => state.vendorAuth.vendor);
    const [orders, setOrders] = React.useState({ data: [], loading: true });

    const getOrders = async ({ page = 1, limit = 10 }) => {
        const resp = await GET.request({ url: `/vendor/get-all-orders?page=${page}&limit=${limit}`, token: vendor?.api_token });
        (resp && resp?.code == 200) ? setOrders({ data: resp.data, loading: false })
            : setOrders({ data: [], loading: false });
    };

    useEffect(() => {
        getOrders({ page });
    }, []);

    return [orders, setOrders, getOrders];
}

export default useOrders;