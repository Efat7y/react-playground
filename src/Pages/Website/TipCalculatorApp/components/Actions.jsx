const Actions = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="
          rounded-xl
          bg-violet-600
          px-8
          py-3
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-violet-700
        "
      >
        Reset
      </button>
    </div>
  );
};
export default Actions;
