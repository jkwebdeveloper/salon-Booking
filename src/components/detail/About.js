import Image from "next/image";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const About = () => {
  return (
    <div className="w-full py-6 space-y-8 bg-[#FAFAFA]">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-black uppercase title heading">
          About <span className="text-primary_color">Spa Life & Massage</span>
        </p>
        <div className="flex items-center gap-3">
          <div className="bg-[#7f52861a] p-1 rounded-full">
            <MdLocationPin className="text-sm text-primary_color" />
          </div>
          <p>Street 420, Addington, London, EH1 1AE, UK</p>
        </div>
      </div>
      <div className="grid items-center grid-cols-1 xl:grid-cols-2 lg:gap-0">
        <div className="space-y-3">
          <p>His & Hairs Hair Salon, for your next cut and style.</p>
          <p>
            This Accrington salon is nestled away on Henry Street and has a menu
            offering a comprehensive selection of professional services. Enjoy
            everything from cuts and styling to balayage and freehand color
            techniques. Open to men and women of all ages, the expert team truly
            cares, helping to ensure top results every time. Using only the best
            products from leading brands like Fudge and Olaplex, book today and
            get that stunning long-lasting style you’ve been longing for. There
            is even free parking nearby. His & Hairs, for the hair you need.
          </p>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Monday</TableCell>
                <TableCell>09:00 AM - 11:30 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tuesday</TableCell>
                <TableCell>09:00 AM - 11:30 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Wednesday</TableCell>
                <TableCell>09:00 AM - 11:30 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Thursday</TableCell>
                <TableCell>09:00 AM - 11:30 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Friday</TableCell>
                <TableCell>09:00 AM - 11:30 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Saturday</TableCell>
                <TableCell>09:00 AM - 11:30 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sunday</TableCell>
                <TableCell>Closed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="space-y-3 mx-auto">
          <Image src={"/static/images/map.png"} width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default About;
