import FlashCards from "@/Pages/Website/FlashCardsPage/components/FlashCards";
import { flashCards } from "@/Data/Data";
import { useState } from "react";

const FlashCardApp = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <FlashCards
        cards={flashCards}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default FlashCardApp;
