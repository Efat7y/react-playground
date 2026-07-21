import { Minus, Plus } from "lucide-react";
import ActionButton from "../ActionButton";

const Counter = ({ value, handleMinus, handlePlus, onChange }) => {
  return (
    <div className="mb-6  items-center justify-center gap-5">
      <div className="flex justify-center">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="mt-2 flex justify-center  rounded border-2 border-gray-300 p-1 text-center"
        />
      </div>
      <div className="flex justify-center gap-4 mt-2">
        <ActionButton onClick={handleMinus}>
          <Minus size={18} />
        </ActionButton>
        <ActionButton className="" onClick={handlePlus}>
          <Plus size={18} />
        </ActionButton>
      </div>
    </div>
  );
};
export default Counter;
