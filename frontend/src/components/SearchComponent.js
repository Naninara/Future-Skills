import React, { useRef, useState } from "react";

function SearchComponent() {
  const [searchResult, setSearchResult] = useState(null);
  const searchRef = useRef();
  async function search() {
    try {
      const results = await fetch(
        `http://localhost:3500/cards/${searchRef.current.value}`
      );
      const jsonResults = await results.json();
      setSearchResult(jsonResults);
      console.log(jsonResults);
    } catch (e) {
      console.log(e);
      setSearchResult([]);
    }
  }
  return (
    <div className="flex bg-[#dadbf0] h-[350px] w-full justify-center items-center flex-col gap-[10px] relative">
      <h1 className="text-[50px] font-semibold">How Can We Help ?</h1>
      <input
        type={"text"}
        placeholder="Search (Please Enter 5 letter to search)"
        className="w-[450px] h-[50px] p-[10px] border-2 border-black rounded-md"
        ref={searchRef}
        onChange={() => search()}
      />

      <div className="absolute top-[250px] h-[150px] overflow-x-scroll flex flex-col gap-[5px] ">
        {searchResult &&
          searchResult.map((ele) => {
            return (
              <div className="w-[450px] h-[50px] bg-white border-2 border-black p-[10px] rounded">
                <p>{ele.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchComponent;
