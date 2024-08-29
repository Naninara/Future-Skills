import React from "react";
const footerData = [
  {
    sectionName: "Abstract",
    subSections: ["Branches"],
  },
  {
    sectionName: "Resources",
    subSections: ["Blog", "Help Center", "Release Notes"],
  },
  {
    sectionName: "Community",
    subSections: ["Twitter", "LinkedIN", "Facebook"],
  },
  {
    sectionName: "Company",
    subSections: ["About Us", "Careers"],
  },
];
function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around bg-black text-white p-[2%]">
        {footerData.map((ele) => {
          return (
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[20px] font-bold">{ele.sectionName}</h1>
              <div>
                {ele.subSections.map((ele) => {
                  return <p>{ele}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="bg-black text-white text-center">
        Abstact Studio Design, All Rights Reserved 2024
      </h1>
    </div>
  );
}

export default Footer;
