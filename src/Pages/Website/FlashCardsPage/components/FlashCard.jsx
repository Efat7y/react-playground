import { front, back } from "@/Data/styles";
const FlashCard = ({ card, selected, setSelected }) => {
  const isActive = selected === card.id;
  function handleClick() {
    setSelected(isActive ? null : card.id);
  }
  return (
    <div
      className="h-56 [perspective:1000px] cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`
          relative h-full w-full rounded-xl transition-transform duration-500
          [transform-style:preserve-3d]
          ${isActive ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        <div className={front}>{card.question}</div>
        <div className={back}>{card.answer}</div>
      </div>
    </div>
  );
};
export default FlashCard;
