import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between mt-2">
      <button className="w-20 border p-2 bg-[#dc143c] text-white cursor-pointer hover:bg-orange-400 hover:text-black">
        Previous
      </button>
      <button className="w-20 border p-2 bg-[#dc143c] text-white cursor-pointer hover:bg-orange-400 hover:text-black">
        Next
      </button>
    </div>
  );
};

export default Pagination;
