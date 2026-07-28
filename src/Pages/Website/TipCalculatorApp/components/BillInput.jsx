const BillInput = ({ bill, onSetBill }) => {
  return (
    <div className="space-y-2">
      <label className="block text-lg font-semibold text-slate-700">
        How much was the bill?
      </label>

      <input
        value={bill}
        onChange={(e) =>
          onSetBill(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
        placeholder="Enter bill amount..."
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
      />
    </div>
  );
};
export default BillInput;
