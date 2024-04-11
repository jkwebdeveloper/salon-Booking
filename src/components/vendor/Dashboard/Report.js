import Button from "@/components/ui/button";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const BusinessReport = () => {
  const [saleDetails, setSaleDetails] = useState(false);
  return (
    <>
      <div className="space-y-4">
        {saleDetails === true ? (
          <>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">Sales per Month</p>
              <div className="flex items-center gap-3">
                <Button variant="primary">04/01/2023 - 02/29/2024</Button>
                <Button variant="secondary">Print</Button>
                <Button variant="outline">Download</Button>
                <IoMdClose
                  className="text-2xl cursor-pointer"
                  onClick={() => setSaleDetails(false)}
                />
              </div>
            </div>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-sm text-[#757575]">
                    Current period
                  </TableCell>
                  <TableCell className="text-right font-medium text-sm text-[#757575]">
                    Revenue
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm text-[#757575]">
                    Nuzami
                  </TableCell>
                  <TableCell className="text-right font-medium text-sm text-[#757575]">
                    £241
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm text-[#757575]">
                    Current period
                  </TableCell>
                  <TableCell className="text-right font-medium text-sm text-[#757575]">
                    Revenue
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm text-[#757575]">
                    Nuzami
                  </TableCell>
                  <TableCell className="text-right font-medium text-sm text-[#757575]">
                    £241
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </>
        ) : (
          <>
            <p className="text-2xl font-semibold">Customers</p>
            <div className="w-full p-4 space-y-3 bg-white rounded-xl">
              <p className="text-2xl font-semibold">Index</p>
              <p>
                A breakdown of all your data, making an easily accessible index
                from customers to finance details.
              </p>
              <hr />
              <div className="flex items-center gap-3">
                <Button variant="primary" onClick={() => setSaleDetails(true)}>
                  Customers
                </Button>
                <Button variant="primary">Appointment Cancellations</Button>
              </div>
            </div>
            <div className="w-full p-4 space-y-3 bg-white rounded-xl">
              <p className="text-2xl font-semibold">Trading breakdown</p>
              <p>
                Examine in detail your trading figures in order to explain and
                interpret them easily.
              </p>
              <hr />
              <div className="flex items-center gap-1">
                <Button variant="primary" className="text-xs">
                  Trading Summary
                </Button>
                <Button variant="primary" className="text-xs">
                  Treatments Breakdown
                </Button>
                <Button variant="primary" className="text-xs">
                  Breakdown By Staff Figures
                </Button>
                <Button variant="primary" className="text-xs">
                  Trading By Source
                </Button>
                <Button variant="primary" className="text-xs">
                  Day To Day Breakdown
                </Button>
                <Button variant="primary" className="text-xs">
                  Monthly Breakdown
                </Button>
              </div>
            </div>
            <div className="w-full p-4 space-y-3 bg-white rounded-xl">
              <p className="text-2xl font-semibold">Customers</p>
              <p>
                Understand how your venue is performing in relation to new
                customer visits converting into repeat customer retention as
                part of your total customer number over the month/quarter.
              </p>
              <hr />
              <div className="flex items-center gap-3">
                <Button variant="primary">New Customers</Button>
                <Button variant="primary">Repeat Customers</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BusinessReport;
