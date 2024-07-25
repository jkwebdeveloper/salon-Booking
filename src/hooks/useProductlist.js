import { GET } from '@/app/api/get';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const useProductList = ({ page }) => {
    const vendor = useSelector((state) => state.vendorAuth.vendor);
    const [products, setProducts] = React.useState({ data: [], loading: true });

    const getProducts = async ({ page = 1, limit = 10 }) => {
        const resp = await GET.request({ url: `/vendor/get-products?page=${page}&limit=${limit}`, token: vendor?.api_token });
        (resp && resp?.code == 200) ? setProducts({ data: resp.data, loading: false })
            : setProducts({ data: [], loading: false });
    };

    useEffect(() => {
        getProducts({ page });
    }, []);

    return [products, setProducts, getProducts];
}

export default useProductList;