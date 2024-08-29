import React from "react";

function Navbar() {
  return (
    <div className="bg-black w-full h-auto text-white flex justify-around gap-[150px] p-[1.5%] items-center">
      <div className="flex gap-[10px]  text-[20px]">
        <p className="font-semibold">Abstract</p>
        <p>|</p>
        <p>Help Center</p>
      </div>
      <div>
        <button className="bg-gray-900 p-[10px] border-2 border-white rounded-sm">
          Sumbit A Request
        </button>
      </div>
    </div>
  );
}

export default Navbar;
