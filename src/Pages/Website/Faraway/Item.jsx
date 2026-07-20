const Item = ({ item, onDeleteItem, onTogglePacked }) => {
  return (
    <li
      className="
        w-full
        rounded-xl
        bg-[#6a4736]
        border border-[#76503c]
        px-4
        py-3
        shadow
      "
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onTogglePacked(item.id)}
            className="h-5 w-5 accent-[#7dd3c7]"
          />

          <span
            className={`truncate text-[#fff3bf] ${
              item.packed ? "line-through opacity-60" : ""
            }`}
          >
            {item.quantity} × {item.description}
          </span>
        </div>

        <button
          onClick={() => onDeleteItem(item.id)}
          className="text-2xl shrink-0 hover:scale-110 transition"
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default Item;
