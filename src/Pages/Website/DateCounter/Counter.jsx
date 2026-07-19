import { Minus, Plus } from "lucide-react";
import ActionButton from "../ActionButton";

const Counter = ({ label, value, handleMinus, handlePlus }) => {
  return (
    <div className="mb-6 flex items-center justify-center gap-5">
      <ActionButton onClick={handleMinus}>
        <Minus size={18} />
      </ActionButton>
      <div className="min-w-32 text-center">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
      </div>
      <ActionButton onClick={handlePlus}>
        <Plus size={18} />
      </ActionButton>
    </div>
  );
};
export default Counter;
