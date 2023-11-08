import React, { useEffect, useState } from "react";
import { showtimeAPI } from '@/util/API/Showtime';
import { Pagination } from 'react-bootstrap';
import "./index.css";
import ShowTime from "../ShowTime";
import { BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useSearchParams, useRouter, usePathname } from "next/navigation";

let format = (data: any) => {
  return data.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

const WeekDate = (prop: any) => {
  // const [dateClick, setCurrentDate] = useState(format(new Date()));
  const pathname = usePathname();
  const search = useSearchParams();
  console.log(search.toString())
  const router = useRouter();
  const currentDate = new Date(search.get("date") || new Date());
  // const [currentDate, setCurrentDate] = useState(new Date("2023-09-16"));
  const [showtimeDetail, setShowtimeDetail] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const getWeekDates = () => {
    const dates = [];
    for (let i = 3; i > -1; i--) {
      let date = new Date(currentDate)
      date.setDate(currentDate.getDate() - i);
      dates.push(date);
    }
    for (let i = 1; i < 4; i++) {
      let date = new Date(currentDate)
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };
  const clickDate = (date: any) => {
    const params = new URLSearchParams(search);
    params.set("date", date);
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const init = async () => {
      const showtime = await showtimeAPI.findShowtimeByMovieAndDate(format(currentDate), prop.movieId, (currentPage - 1));
      setShowtimeDetail(showtime);
    }
    init();
  }, [search, currentPage]);
  return (
    <>
      <div className="grid grid-cols-1 pb-2 border-b-2 border-red-950">
        <div className="flex sm:col-span-3 lg:col-span-12 md:col-span-6 col-span-3 mt-2 mx-auto">
          <button className="py-1 text-center flex-none" onClick={() => clickDate(format(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)))}><BiLeftArrowAlt /></button>
          <div className="grow mx-2">
            {getWeekDates().map((date, index) => {
              // console.log(currentDatedate);
              const active = format(currentDate) == format(date) ? 'bg-red-950 text-white lg:px-8 md:px-7 sm:px-6 sm:mx-2 py-1 my-2 rounded-lg text-center w-full sm:w-auto' : "bg-white text-black lg:px-8 md:px-7 sm:px-6 sm:mx-2 py-1 my-2 rounded-lg text-center w-full sm:w-auto";
              return <button key={index} className={active} onClick={() => { clickDate(format(date)) }}>{format(date)}</button>
            })}
          </div>
          <button className="py-1 text-center flex-none" onClick={() => clickDate(format(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)))}><BiRightArrowAlt /></button>
        </div>
      </div>
      <ShowTime prop={showtimeDetail}>
        <Pagination className="flex gap-4 place-content-center">
          <button style={{ fontSize: "30px" }} onClick={() => { setCurrentPage(1) }} className="btn border-0 buttonPage text-white"><BiArrowToLeft style={{ alignItems: "center", height: "57" }} /></button>
          <button style={{ fontSize: "30px" }} onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1) }} className="btn border-0 me-1 buttonPage text-white"><BiLeftArrowAlt style={{ alignItems: "center", height: "57" }} /></button>
          {Array.from({ length: showtimeDetail.totalPages }, (_, index) => (
            <Pagination.Item
              className={`mt-4 ${currentPage === index + 1 ? "activePage" : ""}`}
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
          <button style={{ fontSize: "30px" }} onClick={() => { if (currentPage < showtimeDetail.totalPages) setCurrentPage(currentPage + 1) }} className="btn border-0 ms-1 buttonPage text-white"><BiRightArrowAlt style={{ alignItems: "center", height: "57" }} /></button>
          <button style={{ fontSize: "30px" }} onClick={() => { setCurrentPage(showtimeDetail.totalPages) }} className="btn border-0 buttonPage text-white"><BiArrowToRight style={{ alignItems: "center", height: "57" }} /></button>
        </Pagination>
      </ShowTime>
    </>
  );
};

export default WeekDate;