import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";
import useDB from "@/hooks/useDB";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function HallCustomer() {
  const [bookings, setBookings] = useState<any[]>();
  const navigate = useNavigate();
  const db = useDB();

  useEffect(() => {
    const fetchData = async () => {
      const cid = localStorage.getItem("user_id");
      if (!cid) {
        alert("No user please sign in...");
        navigate("/");
      }
      setBookings(await db.getBookings(cid!));
    };
    fetchData();
  }, []);
  return (
    <div>
      <Table>
        <TableCaption>A list of your Bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Hall Name</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.map((v, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{v.hall_name}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {v.hall_tags.split(",").map((s: string, si: number) => (
                    <p className="px-3 rounded-full bg-slate-200" key={si}>
                      {s}
                    </p>
                  ))}
                </div>
              </TableCell>
              <TableCell>{v.booking_date.split("T")[0]}</TableCell>
              <TableCell className="text-right">
                {v.is_confirmed ? "Confirmed" : "Rejected"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
