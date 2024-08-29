import React from "react";

function SingleCard({ title, description }) {
  return (
    <div className="flex flex-col border-2 border-gray-300 h-[150px] w-[400px] ">
      <h1 className="flex p-[10px] border-b-2 border-gray-400 font-bold text-[18px] text-gray-900 capitalize">
        {title}
      </h1>
      <p className="p-[10px] capitalize text-[18px] text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default SingleCard;
