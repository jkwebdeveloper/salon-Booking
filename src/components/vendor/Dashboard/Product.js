import Button from "@/components/ui/button";
import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import NewAddModal from "./Modal/ProductModal/NewAddModal";
import ProductModal from "./Modal/ProductModal/ProductModal";
import SupplierNewAddModal from "./Modal/ProductModal/SupplierNewAddModal";

const Product = () => {
  const [products, setProducts] = useState(true);
  const [suppliers, setSuppliers] = useState(false);
  const [Orders, setOrders] = useState(false);
  const [addNewDialog, setAddNewDialog] = useState(false);
  const [productDialog, setProductDialog] = useState(false);
  // Suppliers
  const [supplierDialog, setSupplierDialog] = useState(false);

  const handleProductClick = () => {
    setProducts(true);
    setOrders(false);
    setSuppliers(false);
  };
  const handleSupplierClick = () => {
    setProducts(false);
    setOrders(false);
    setSuppliers(true);
  };
  const handleOrderClick = () => {
    setProducts(false);
    setOrders(true);
    setSuppliers(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button
          variant={products ? "primary" : "disable"}
          onClick={handleProductClick}
        >
          Products
        </Button>
        <Button
          variant={suppliers ? "primary" : "disable"}
          onClick={handleSupplierClick}
        >
          Suppliers
        </Button>
        <Button
          variant={Orders ? "primary" : "disable"}
          onClick={handleOrderClick}
        >
          Orders
        </Button>
      </div>
      {products && (
        <>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Products</p>
            {/* <Button variant="primary">+Add new</Button> */}
            <Dialog open={addNewDialog}>
              <DialogTrigger
                onClick={(e) => setAddNewDialog(true)}
                className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
              >
                + Add New
              </DialogTrigger>
              <DialogContent
                close={setAddNewDialog}
                className="sm:max-w-[450px]"
              >
                <DialogTitle>Add product</DialogTitle>
                <NewAddModal
                  setAddNewDialog={setAddNewDialog}
                  // setCustomers={setCustomers}
                  // customers={customers}
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full rounded-lg font-[sans-serif]">
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
                <tr className="">
                  <td className="px-6 py-4 text-sm">Face wash</td>
                  <td className="px-6 py-4 text-sm">Distributor 1</td>
                  <td className="px-6 py-4 text-sm">£5.00</td>
                  <td className="px-6 py-4 text-sm">
                    <p className="border border-[#D9D9D9] w-[35px] rounded-md p-2">
                      23
                    </p>
                  </td>
                  <td className="flex gap-4 px-6 py-4">
                    {/* <Button
                      variant="icon"
                      size="icon"
                      className="px-0"
                      onClick={(e) => {
                        setEditDialog(true);
                        setEditCustomer(customer);
                      }}
                    >
                      <BsPencilFill className="text-[#0AADA4] text-xl" />
                    </Button> */}
                    <Dialog open={productDialog}>
                      <DialogTrigger
                        onClick={(e) => setProductDialog(true)}
                        className=""
                      >
                        <BsPencilFill className="text-[#0AADA4] text-xl" />
                      </DialogTrigger>
                      <DialogContent
                        close={setProductDialog}
                        className="sm:max-w-[450px]"
                      >
                        <DialogTitle>Product</DialogTitle>
                        <ProductModal
                          setProductDialog={setProductDialog}
                          // setCustomers={setCustomers}
                          // customers={customers}
                        />
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="icon"
                      size="icon"
                      className="px-0"
                      // onClick={(e) => {
                      //   setEditDialog(true);
                      //   setViewCustomer(customer);
                      // }}
                    >
                      <IoTrashSharp className="text-[#EA2C6D] text-xl" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      {suppliers && (
        <>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold">Suppliers</p>
            <Dialog open={supplierDialog}>
              <DialogTrigger
                onClick={(e) => setSupplierDialog(true)}
                className="flex items-center h-8 px-6 py-5 text-sm font-medium text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
              >
                + Add New
              </DialogTrigger>
              <DialogContent
                close={setSupplierDialog}
                className="sm:max-w-[450px]"
              >
                <DialogTitle>Supplier details</DialogTitle>
                <SupplierNewAddModal
                  setSupplierDialog={setSupplierDialog}
                  // setCustomers={setCustomers}
                  // customers={customers}
                />
              </DialogContent>
            </Dialog>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg">
            <table className="min-w-full rounded-lg font-[sans-serif]">
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
                <tr className="">
                  <td className="px-6 py-4 text-sm">Face wash</td>
                  <td className="px-6 py-4 text-sm">Distributor 1</td>
                  <td className="px-6 py-4 text-sm">£5.00</td>
                  <td className="px-6 py-4 text-sm">
                    <p className="border border-[#D9D9D9] w-[35px] rounded-md p-2">
                      23
                    </p>
                  </td>
                  <td className="flex gap-4 px-6 py-4">
                    {/* <Button
                      variant="icon"
                      size="icon"
                      className="px-0"
                      onClick={(e) => {
                        setEditDialog(true);
                        setEditCustomer(customer);
                      }}
                    >
                      <BsPencilFill className="text-[#0AADA4] text-xl" />
                    </Button> */}
                    <Dialog open={productDialog}>
                      <DialogTrigger
                        onClick={(e) => setProductDialog(true)}
                        className=""
                      >
                        <BsPencilFill className="text-[#0AADA4] text-xl" />
                      </DialogTrigger>
                      <DialogContent
                        close={setProductDialog}
                        className="sm:max-w-[450px]"
                      >
                        <DialogTitle>Product</DialogTitle>
                        <ProductModal
                          setProductDialog={setProductDialog}
                          // setCustomers={setCustomers}
                          // customers={customers}
                        />
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="icon"
                      size="icon"
                      className="px-0"
                      // onClick={(e) => {
                      //   setEditDialog(true);
                      //   setViewCustomer(customer);
                      // }}
                    >
                      <IoTrashSharp className="text-[#EA2C6D] text-xl" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      {Orders && (
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">Product orders</p>
          <Button variant="primary">+ Add new order</Button>
        </div>
      )}
    </div>
  );
};

export default Product;
