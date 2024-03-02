"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between mt-2">
      <button
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
        className="w-20 border p-2 bg-[#dc143c] text-white cursor-pointer hover:bg-orange-400 hover:text-black"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
        className="w-20 border p-2 bg-[#dc143c] text-white cursor-pointer hover:bg-orange-400 hover:text-black"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
