const FlashCard = ({ card, selectedId, setSelectedId }) => {
  const isActive = selectedId === card.id;

  return (
    <div
      className="h-56 perspective-1000 cursor-pointer"
      onClick={() => setSelectedId(isActive ? null : card.id)}
    >
      <div
        className={`
          relative h-full w-full rounded-xl transition-transform duration-500
          [transform-style:preserve-3d]
          ${isActive ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* Front */}
        <div
          className="
            border
            shadow-md
            absolute inset-0
            flex items-center justify-center
            rounded-xl
            bg-white
            p-8
            text-center
            text-xl
            font-semibold
            [backface-visibility:hidden]
          "
        >
          {card.question}
        </div>

        {/* Back */}
        <div
          className="
            border
            shadow-md
            absolute inset-0
            flex items-center justify-center
            rounded-xl
            bg-red-600
            p-8
            text-center
            text-xl
            font-semibold
            text-white
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          {card.answer}
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
