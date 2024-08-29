import React from "react";

function SearchComponent() {
  return (
    <div className="flex bg-[#dadbf0] h-[350px] w-full justify-center items-center flex-col gap-[10px]">
      <h1 className="text-[50px] font-semibold">How Can We Help ?</h1>
      <input
        type={"text"}
        placeholder="Search"
        className="w-[450px] h-[50px] p-[10px] border-2 border-black rounded-md"
      />
    </div>
  );
}

export default SearchComponent;
