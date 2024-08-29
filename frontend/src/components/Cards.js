import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
function Cards() {
  const [loading, setLoading] = useState(false);
  const [cardsData, setCardsData] = useState(null);

  async function getCards() {
    setLoading(true);
    const cardsData = await fetch("http://localhost:3500/cards");
    const json = await cardsData.json();
    setLoading(false);
    setCardsData(json);
  }
  useEffect(() => {
    getCards();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-around flex-wrap p-[10%] gap-[100px]">
      {cardsData &&
        cardsData.map((ele) => {
          return <SingleCard {...ele} />;
        })}
    </div>
  );
}

export default Cards;
