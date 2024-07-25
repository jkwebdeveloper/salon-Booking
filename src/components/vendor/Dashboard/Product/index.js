import Button from "@/components/ui/button";
import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { IoTrashSharp } from "react-icons/io5";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";
import SupplierNewAddModal from "@/components/vendor/Dashboard/Modal/ProductModal/SupplierNewAddModal";
import ProductList from "@/components/vendor/Dashboard/Product/productlist";
import Supplier from "@/components/vendor/Dashboard/Product/supplier";
import Orders from "@/components/vendor/Dashboard/Product/orders";

const Product = () => {
    const [editDialog, setEditDialog] = useState(false);
    const [addDialog, setAddDialog] = useState(false);
    const [currentTab, setCurrentTab] = useState("orders");
    const [productModal, setProductModal] = useState(false);

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <Button
                    variant={currentTab == 'products' ? "primary" : "disable"}
                    onClick={e => setCurrentTab("products")}
                >
                    Products
                </Button>
                <Button
                    variant={currentTab == 'suppliers' ? "primary" : "disable"}
                    onClick={e => setCurrentTab("suppliers")}
                >
                    Suppliers
                </Button>
                <Button
                    variant={currentTab == 'orders' ? "primary" : "disable"}
                    onClick={e => setCurrentTab("orders")}
                >
                    Orders
                </Button>
            </div>
            {currentTab == 'products' && <ProductList />}
            {currentTab == 'suppliers' && <Supplier />}
            {currentTab == 'orders' && <Orders />}
        </div>
    );
};

export default Product;
