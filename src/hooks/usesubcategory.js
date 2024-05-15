import { GET } from '@/app/api/get';
import React, { useCallback, useEffect } from 'react'

const useSubCategory = ({ id }) => {
    const [subCat, setSubCat] = React.useState({ data: [], loading: true });

    const getSubCategories = async () => {
        const resp = await GET.request({ url: `/get-sub-categories?categories_id=${id}` });
        (resp && resp?.code == 200) ? setSubCat({ data: resp.data, loading: false })
            : setSubCat({ data: [], loading: false });
    };

    useEffect(() => {
        id && getSubCategories();
    }, []);

    return subCat;
}

export default useSubCategory;