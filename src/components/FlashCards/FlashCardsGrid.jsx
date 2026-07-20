import FlashCard from "./FlashCard";

const FlashCardsGrid = ({ cards, selectedId, setSelectedId }) => {
  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      p-6
      "
    >
      {cards.map((card) => (
        <FlashCard
          key={card.id}
          card={card}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};

export default FlashCardsGrid;
