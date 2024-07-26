import React, { useEffect } from 'react';
import { BsPencilFill } from "react-icons/bs";
import { IoTrashSharp } from "react-icons/io5";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";

import NewAddModal from "@/components/vendor/Dashboard/Modal/ProductModal/NewAddModal";
import ProductModal from "@/components/vendor/Dashboard/Modal/ProductModal/ProductModal";
import useProductList from "@/hooks/useProductlist";
import { Spinner, PageLoader, Button } from "@/components";
import { POST } from '@/app/api/post';
import { useSelector } from 'react-redux';
import { set } from 'date-fns';
import Image from 'next/image';

function ProductList() {
    const vendor = useSelector((state) => state.vendorAuth.vendor);
    const [currentPage, setCurrentPage] = React.useState({ changing: false, value: 1 });
    const [products, setProducts, getProducts] = useProductList({ page: currentPage.value });
    const [totalPage, setTotalPage] = React.useState(1);
    const [showNumberofBtn, setShowNumberofBtn] = React.useState(5);
    const [editDialog, setEditDialog] = React.useState(false);
    const [addDialog, setAddDialog] = React.useState(false);
    const [editProduct, setEditProduct] = React.useState(null);

    const deleteProduct = async (id) => {
        const resp = await POST.request({ url: `/vendor/delete-products`, form: { products_id: id }, token: vendor?.api_token });
        if (resp && resp.code === 200) {
            const newData = products.data.products.filter(p => p.id != id);
            setProducts({ ...products, data: { ...products.data, products: newData } });
        }
    }

    useEffect(() => {
        setTotalPage(products?.data?.total_pages || 1);
    }, [products?.loading]);

    useEffect(() => {
        getProducts({ page: currentPage.value }).then(() => {
            setCurrentPage(prev => ({ ...prev, changing: false }));
        });
    }, [currentPage.value]);
    return (
        <>
            <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold">Products</p>
                {/* <Button variant="primary">+Add new</Button> */}
                <Dialog open={addDialog}>
                    <DialogTrigger
                        onClick={(e) => setAddDialog(true)}
                        className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                    >
                        + Add New
                    </DialogTrigger>
                    <DialogContent
                        close={setAddDialog}
                        className="sm:max-w-[450px]"
                    >
                        <DialogTitle>Add product</DialogTitle>
                        <NewAddModal
                            setAddDialog={setAddDialog}
                            getProducts={getProducts}
                            currentPage={currentPage.value}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg">
                {!products?.loading
                    && <table className="min-w-full rounded-lg font-[sans-serif]">
                        <thead className="border-b-2 whitespace-nowrap">
                            <tr>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Product
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Supplier
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Stock
                                </th>
                                <th className="px-6 py-3 text-sm font-semibold text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b-2 whitespace-nowrap">
                            {products?.data?.products?.map((product, index) => (
                                <tr className="">
                                    <td className="px-6 py-4 text-sm capitalize">{product?.name}</td>
                                    <td className="px-6 py-4 text-sm capitalize">{product?.supplier?.supplier_name || 'N/A'}</td>
                                    <td className="px-6 py-4 text-sm">£{product?.price}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <p className="border border-[#D9D9D9] w-max min-w-8 px-1 h-8 rounded-md p-2 flex items-center justify-center">
                                            {product?.quantity_in_stock}
                                        </p>
                                    </td>
                                    <td className="flex gap-4 px-6 py-4">

                                        <Button
                                            variant="icon"
                                            size="icon"
                                            className="px-0"
                                            onClick={(e) => { setEditDialog(true); setEditProduct(product) }}
                                        >
                                            <BsPencilFill className="text-[#0AADA4] text-xl" />
                                        </Button>
                                        <Button
                                            variant="icon"
                                            size="icon"
                                            className="px-0"
                                            onClick={(e) => deleteProduct(product?.id)}
                                        >
                                            <IoTrashSharp className="text-[#EA2C6D] text-xl" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    || ''
                }
                <Dialog open={editDialog}>
                    <DialogContent
                        close={setEditDialog}
                        className="sm:max-w-[450px]"
                    >
                        <DialogTitle>Product</DialogTitle>
                        <ProductModal
                            setEditDialog={setEditDialog}
                            editProduct={editProduct}
                            getProducts={getProducts}
                            currentPage={currentPage.value}
                        />
                    </DialogContent>
                </Dialog>
                <Pagination className={'py-3 relative'}>
                    <PaginationContent className={products?.loading && 'opacity-0'}>
                        <PaginationItem className="p-0 !w-6 !h-6">
                            <PaginationPrevious className={`${currentPage.value != 1 && 'text-primary bg-neutral-100' || 'bg-neutral-100 opacity-50 cursor-not-allowed p-0'} !w-full !h-full`} onClick={e => currentPage.value != 1 && setCurrentPage({ changing: true, value: currentPage.value - 1 })} />
                        </PaginationItem>
                        {Array.from({ length: totalPage }, (_, i) => {
                            const start = currentPage.value - Math.floor(showNumberofBtn / 2);
                            if (currentPage.value <= Math.floor(showNumberofBtn / 2)) {
                                if (i < showNumberofBtn) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationLink
                                                className={`!w-6 !h-6 p-0 hover:bg-primary hover:text-white ${currentPage.value == i + 1 && 'pointer-events-none'} ${currentPage.changing && currentPage.value == i + 1 && 'bg-[url("/static/icons/ring.svg")]' || ''}`}
                                                isActive={(currentPage?.changing && currentPage.value || currentPage.value === i + 1) || totalPage == 1}
                                                onClick={e => {
                                                    setCurrentPage({ changing: true, value: i + 1 });
                                                }}
                                            >
                                                {i + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                }
                            }
                            else if (currentPage.value > Math.floor(showNumberofBtn / 2)) {
                                if (i >= start && i < start + showNumberofBtn) {
                                    return (
                                        <PaginationItem key={i}>
                                            <PaginationLink
                                                className={`!w-6 !h-6 p-0 hover:bg-primary hover:text-white ${currentPage.value == i + 1 && 'pointer-events-none'} ${currentPage.changing && currentPage.value == i + 1 && 'bg-[url("/static/icons/ring.svg")]' || ''}`}
                                                isActive={(currentPage?.changing && currentPage.value || currentPage.value === i + 1) || totalPage == 1}
                                                onClick={e => {
                                                    setCurrentPage({ changing: true, value: i + 1 });
                                                }}
                                            >
                                                {i + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                }
                            }
                        })}
                        <PaginationItem className="p-0 !w-6 !h-6">
                            <PaginationNext className={`${currentPage.value != totalPage && 'text-primary bg-neutral-100' || 'bg-neutral-100 opacity-80 cursor-not-allowed p-0'} !w-full !h-full`} onClick={e => currentPage.value != totalPage && setCurrentPage({ changing: true, value: currentPage.value + 1 })} />
                        </PaginationItem>
                    </PaginationContent>
                    {products?.loading && <div className='absolute d-flex justify-content-center align-items-center top-2/4 -translate-y-2/4'>
                        <Spinner show={true} width={40} height={40} />
                    </div>}
                </Pagination>
            </div>
        </>
    )
}

export default ProductList