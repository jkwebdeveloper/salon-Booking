import Image from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import convertto12 from "@/lib/convertto12";
import { v4 } from "uuid";

const About = ({ data }) => {
  const { about_salon, address_line_one, availability, address_line_two } = data;
  const days = {
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thursday",
    "Fri": "Friday",
    "Sat": "Saturday",
    "Sun": "Sunday",
  }
  return (
    <div className="container w-full p-3 py-6 space-y-8">
      <div className="flex flex-col justify-between gap-4 text-left lg:items-center md:flex-row">
        <p className="text-lg font-semibold text-black uppercase lg:text-2xl title heading">
          About <span className="text-primary_color">Spa Life & Massage</span>
        </p>
        <div className="flex items-center gap-3">
          <div className="bg-[#7f52861a] p-1 rounded-full">
            <MdLocationPin className="text-sm text-primary_color" />
          </div>
          <p>{address_line_one}</p>
        </div>
      </div>
      <div className="grid items-start grid-cols-1 xl:grid-cols-2 lg:gap-10">
        <div className="space-y-3">
          {about_salon}
          <Table>
            <TableBody>
              {availability.length && availability.map((item, index) => {
                const open = item?.status === 1 ? item.from_time.slice(0, 5) : '';
                const close = item?.status === 1 ? item.to_time.slice(0, 5) : '';
                return (
                  <TableRow key={v4()}>
                    <TableCell className="font-medium">
                      {days[item.day]}
                    </TableCell>
                    <TableCell>
                      {item?.status === 0 ? 'Closed' : convertto12(open) + ' - ' + convertto12(close)}
                    </TableCell>
                  </TableRow>
                )
              }) || ''}
            </TableBody>
          </Table>
        </div>
        <div className="w-full h-full mx-auto space-y-3">
          <Image src={"/static/images/map.png"} width={500} height={500} className="object-cover w-full h-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
