const ActionButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-violet-700 active:scale-95"
    >
      {children}
    </button>
  );
};
export default ActionButton;
