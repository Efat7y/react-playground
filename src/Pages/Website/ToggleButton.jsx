const ToggleButton = ({ isOpen, onToggle }) => {
  return (
    <div className="flex justify-end w-full">
      <button
        className="rounded bg-violet-600 px-3 py-1 text-2xl mr-4 font-semibold text-white transition hover:bg-violet-700"
        onClick={onToggle}
      >
        {isOpen ? "X" : "☰"}
      </button>
    </div>
  );
};
export default ToggleButton;
