import Button from "@/components/ui/button";
import React, { useState } from "react";

const Product = () => {
  const [products, setProducts] = useState(false);
  const [suppliers, setSuppliers] = useState(false);
  const [Orders, setOrders] = useState(false);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button
          variant={products ? "primary" : "disable"}
          //   onClick={handleTreatmentClick}
        >
          Products
        </Button>
        <Button
          variant={suppliers ? "primary" : "disable"}
          //   onClick={handleVoucherClick}
        >
          Suppliers
        </Button>
        <Button
          variant={Orders ? "primary" : "disable"}
          //   onClick={handleVoucherClick}
        >
          Orders
        </Button>
      </div>
      <div className="text-5xl font-semibold">Product</div>
      <div className="text-5xl font-semibold">Suppliers</div>
      <div className="text-5xl font-semibold">Product</div>
    </div>
  );
};

export default Product;
