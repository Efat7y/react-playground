import { useState } from "react";
import { flashCards } from "@/Data/Data";
import FlashCardsGrid from "./FlashCardsGrid";

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <FlashCardsGrid
      cards={flashCards}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    />
  );
};

export default FlashCards;
