const Step = ({ number, active }) => {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
        active ? "bg-violet-600 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      {number}
    </div>
  );
};

export default Step;
