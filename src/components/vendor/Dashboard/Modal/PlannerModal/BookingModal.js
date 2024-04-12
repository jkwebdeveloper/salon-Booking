import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const BookingModal = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="bg-[#0AADA4] p-2 text-center rounded-full">JB</div>
        <p className="text-lg font-semibold">Jason Bully</p>
      </div>
      <hr />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-black">ORDER NO:</TableHead>
            <TableHead className="text-black">02</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Name:</TableCell>
            <TableCell>Jason Bully</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Contact No:</TableCell>
            <TableCell>+1 2345678932</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Name:</TableCell>
            <TableCell>Jason Bully</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Name:</TableCell>
            <TableCell>Jason Bully</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingModal;
