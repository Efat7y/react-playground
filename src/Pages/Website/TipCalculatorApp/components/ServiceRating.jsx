const ServiceRating = ({ title, percentage, onSelect }) => {
  return (
    <div className="space-y-2">
      <label className="block text-lg font-semibold text-slate-700">
        {title}
      </label>

      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          focus:border-violet-600
        "
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};
export default ServiceRating;
