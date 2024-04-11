import Sidebar from "@/components/global/DashboardHeader/Sidebar";
import Button from "@/components/ui/button";
import React from "react";
import { FaEye } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import { BiCart } from "react-icons/bi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DashBoardHome = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button variant="primary">Stats</Button>
        <Button>Reviews</Button>
      </div>
      <div className="w-full bg-white rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={"/static/images/review.png"}
              alt="logo"
              loading="lazy"
              width={200}
              height={200}
            />
          </div>
          <div className="flex items-center mr-5 gap-7">
            <div className="space-y-2 text-center">
              <FaEye className="mx-auto text-xl text-primary_color" />
              <p>PamperTree View</p>
            </div>
            <div className="space-y-2 text-center">
              <MdPhoneInTalk className="mx-auto text-xl text-primary_color" />
              <p>Contact PamperTree</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="bg-gradient-to-r from-[#0893D3] py-8 px-4 rounded-xl to-[#1EB9D8]">
          <div className="flex items-center justify-between text-white">
            <div>
              <LuUser2 className="bg-[#4f8199] rounded-full text-white text-4xl p-2" />
              <p>Total Customers</p>
            </div>
            <div className="">
              <p className="text-4xl font-semibold">12</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#FE585B] py-8 px-4 rounded-xl to-[#F6819B]">
          <div className="flex items-center justify-between text-white">
            <div>
              <LuUser2 className="bg-[#4f8199] rounded-full text-white text-4xl p-2" />
              <p>Total Revenue</p>
            </div>
            <div className="">
              <p className="text-4xl font-semibold">£845</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#393C89] py-8 px-4 rounded-xl to-[#389AC1]">
          <div className="flex items-center justify-between text-white">
            <div>
              <LuUser2 className="bg-[#4f8199] rounded-full text-white text-4xl p-2" />
              <p>Employees</p>
            </div>
            <div className="">
              <p className="text-4xl font-semibold">2</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-2xl font-semibold">Monthly Revenue Outline</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="p-3 bg-white rounded-lg">
          <div className="space-y-3">
            <p className="mx-2 font-medium">Monthly Revenue Outline</p>
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
            </TableBody>
          </Table>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <div className="space-y-3">
            <p className="mx-2 font-medium">Service sales</p>
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
            </TableBody>
          </Table>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <div className="space-y-3">
            <p className="mx-2 font-medium">Sales By Source</p>
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
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
