import FlashCard from "./FlashCard";

const FlashCards = ({ cards, selected, setSelected }) => {
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
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default FlashCards;
