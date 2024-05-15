import { GET } from '@/app/api/get';
import React, { useCallback, useEffect } from 'react'

const useCategory = () => {
    const [mainCat, setMainCat] = React.useState({ data: [], loading: true });

    const getCategories = async () => {
        const resp = await GET.request({ url: '/get-categories' });
        (resp && resp?.code == 200) ? setMainCat({ data: resp.data, loading: false })
            : setMainCat({ data: [], loading: false });
    };

    useEffect(() => {
        getCategories();
    }, []);

    return mainCat;
}

export default useCategory;