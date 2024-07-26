import { POST } from "@/app/api/post";
import Label from "@/components/ui/form/label";
import Validation from "@/constants/validation";
import useProductList from "@/hooks/useProductlist";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Spinner, PageLoader, Button, Error } from "@/components";


const SupplierNewAddModal = ({ setAddDialog, editSupplier, getSuppliers, activePage }) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);
  const [currentPage, setCurrentPage] = React.useState({ changing: false, value: 1 });
  const [totalPage, setTotalPage] = React.useState(1);
  const [showNumberofBtn, setShowNumberofBtn] = React.useState(5);
  const [products, setProducts, getProducts] = useProductList({ page: currentPage.value });
  const [activeTab, setActiveTab] = useState("supplierInfo");
  const [supplier, setSupplier] = useState(editSupplier || null);
  const [formState, setFormState] = React.useState({
    loading: false,
    error: "",
    success: "",
  });
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addSupplier = async (e) => {
    e.preventDefault();
    const resp = await POST.request({ url: supplier && '/vendor/update-supplier' || '/vendor/add-supplier', token: vendor?.api_token, form: e.target, formState, setFormState });
    if (resp && resp.code === 200) {
      setSupplier(resp.data);
      setActiveTab('assignedProducts');
      setFormState({ loading: false, error: "", success: "" });
    }
  }

  const assignProducts = async (e) => {
    const resp = await POST.request({
      url: '/vendor/assign-products-to-supplier', token: vendor?.api_token, rawdata: true, form: {
        supplier_id: supplier?.id, products: selectedProducts
      }, formState, setFormState
    });
    if (resp && resp?.success == true) {
      setAddDialog(false);
      getSuppliers({ page: activePage.value });
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
      <div className="flex items-center gap-4 border-b-[2px]">
        <Button
          variant="ghost"
          className={`p-0 cursor-pointer rounded-none ${activeTab === "supplierInfo"
            ? "text-[#0AADA4] font-semibold border-b-[#0AADA4] border-b-[2px]"
            : "text-[#808080] font-normal"
            }`}
          onClick={e => setActiveTab("supplierInfo")}
        >
          Supplier info
        </Button>
        <Button
          variant="ghost"
          className={`p-0 cursor-pointer rounded-none
            ${!supplier && 'pointer-events-none'}
            ${activeTab === "assignedProducts"
              ? "text-[#0AADA4] font-semibold border-b-[#0AADA4] border-b-[2px]"
              : "text-[#808080] font-normal"
            }`}
          onClick={e => setActiveTab("assignedProducts")}
        >
          Assigned products
        </Button>
      </div>
      {activeTab == 'supplierInfo' && (
        <form className="space-y-3" noValidate onSubmit={e => addSupplier(e)}>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="supplier_name" text="Supplier name *" />
            <input
              type="text"
              name="supplier_name"
              className="input_field"
              placeholder="Enter Supplier name *"
              pattern={Validation?.supplier_name?.pattern}
              defaultValue={supplier?.supplier_name}
            />
            <p className="error max-w-[250px]">{Validation?.supplier_name?.msg}</p>
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="contact_persion" text="Contact person *" />
            <input
              type="text"
              name="contact_persion"
              className="input_field"
              placeholder="Enter Contact Person *"
              pattern={Validation?.contact_persion?.pattern}
              defaultValue={supplier?.contact_persion}
            />
            <p className="error max-w-[250px]">{Validation?.contact_person?.msg}</p>
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="phone" text="Phone *" />
            <input
              type="text"
              name="phone"
              className="input_field"
              placeholder="Enter Phone *"
              pattern={Validation?.phone?.pattern}
              defaultValue={supplier?.phone}
            />
            <p className="error max-w-[250px]">{Validation?.phone?.msg}</p>
          </div>
          <div className="w-full space-y-1 text-left">
            <Label htmlFor="email" text="Email *" />
            <input
              type="email"
              name="email"
              className="input_field"
              placeholder="Email"
              pattern={Validation?.email?.pattern}
              defaultValue={supplier?.email}
            />
            <p className="error max-w-[250px]">{Validation?.email?.msg}</p>
          </div>
          {supplier && <input type="hidden" name="supplier_id" value={supplier?.id} />}
          <Button
            variant="primary"
            type="submit"
            className="items-center w-full"
            disabled={formState.loading}
          >
            <Spinner
              show={formState.loading}
              width="25"
              height="25"
              text={supplier ? 'Update' : 'Save'}
            />
          </Button>
        </form>
      )}
      {supplier && activeTab == 'assignedProducts' && (
        <form className="space-y-3">
          {!products?.loading && products?.data?.products?.map((product, index) => (
            <li className="w-full pb-2 list-none border-b">
              <div className="flex items-center gap-3 capitalize">
                <input
                  id={'product' + product?.id}
                  type="checkbox"
                  className="w-4 h-4 text-white border-none peer accent-teal-600"
                  defaultChecked={selectedProducts.includes(product?.id)}
                  onChange={e => {
                    if (e.target.checked) {
                      setSelectedProducts([...selectedProducts, product?.id]);
                    } else {
                      setSelectedProducts(selectedProducts.filter(item => item !== product?.id));
                    }
                  }}
                />
                <label
                  htmlFor={'product' + product?.id}
                >
                  {product?.name}
                </label>
              </div>
            </li>
          ))}
          <Pagination className={'py-3 relative'}>
            <PaginationContent className={products
              ?.loading && 'opacity-0'}>
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
            {products
              ?.loading && <div className='absolute d-flex justify-content-center align-items-center top-2/4 -translate-y-2/4'>
                <Spinner show={true} width={40} height={40} />
              </div>}
          </Pagination>
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              className="items-center w-full uppercase"
              onClick={e => assignProducts()}
            >
              <Spinner
                show={formState.loading}
                width="25"
                height="25"
                text={'Save'}
              />
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default SupplierNewAddModal;
